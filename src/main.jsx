import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarDays, Heart, MapPin, MessageCircle, Music, Pause, Play, Sparkles } from 'lucide-react';
import coupleImage from './assets/couple-caricature.png';
import './styles.css';

const weddingConfig = {
  couple: 'Aymen & Rania',
  tagline: 'Are getting married!',
  dateLabel: '12 July 2026',
  timeLabel: 'from 7:00 PM',
  locationLabel: 'Zaghouan',
  // You can replace this with the exact Google Maps link of the venue.
  mapsUrl: 'https://maps.app.goo.gl/GfubuqWGwyLfxY4T7',
  // Replace with the real WhatsApp number. Format: country code + number, without + or spaces.
  whatsappNumber: '+21654305835',
  targetDate: '2026-07-12T19:00:00+01:00',
};

function getTimeLeft(targetDate) {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  const total = Math.max(difference, 0);

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: pad(timeLeft.hours) },
    { label: 'Minutes', value: pad(timeLeft.minutes) },
    { label: 'Seconds', value: pad(timeLeft.seconds) },
  ];

  return (
    <section className="countdown-card" aria-label="Countdown to the wedding day">
      <p className="section-kicker">Countdown to the big day</p>
      <div className="countdown-grid">
        {items.map((item) => (
          <div className="countdown-item" key={item.label}>
            <span className="countdown-value">{item.value}</span>
            <span className="countdown-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      <span>♡</span>
      <span>♡</span>
      <span>♡</span>
      <span>♡</span>
      <span>♡</span>
    </div>
  );
}

function App() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  const whatsappUrl = useMemo(() => {
    const message = encodeURIComponent(
      `Hello Aymen & Rania! We confirm our presence for your wedding on ${weddingConfig.dateLabel} in ${weddingConfig.locationLabel}. ❤️`
    );
    return `https://wa.me/${weddingConfig.whatsappNumber}?text=${message}`;
  }, []);

  return (
    <main className="page-shell">
      <FloatingHearts />

      <section className="invitation-card">
        <div className="top-bar">
          
        </div>

        <header className="hero-header">
          <Sparkles className="sparkle sparkle-left" size={22} />
          <h1>{weddingConfig.couple}</h1>
          <Heart className="heart-icon" size={32} />
          <p>{weddingConfig.tagline}</p>
          <Sparkles className="sparkle sparkle-right" size={22} />
        </header>

        <div className="image-frame">
          <img src={coupleImage} alt="Caricature wedding portrait of Aymen and Rania" />
        </div>

        <section className="message-section">
          <p className="main-message">Same craziness, same team, forever.</p>
          <p className="funny-message">Love, laughter, and probably a few questionable dance moves.</p>
        </section>

        <Countdown targetDate={weddingConfig.targetDate} />

        <section className="details-grid" aria-label="Wedding details">
          <article className="detail-card">
            <div className="icon-circle"><CalendarDays size={22} /></div>
            <p className="detail-title">Date</p>
            <p className="detail-main">{weddingConfig.dateLabel}</p>
            <p className="detail-sub">{weddingConfig.timeLabel}</p>
          </article>

          <article className="detail-card">
            <div className="icon-circle"><MapPin size={22} /></div>
            <p className="detail-title">Location</p>
            <p className="detail-main">{weddingConfig.locationLabel}</p>
            <p className="detail-sub">Tunisia</p>
          </article>
        </section>

        <div className="actions">
          <a className="primary-button" href={weddingConfig.mapsUrl} target="_blank" rel="noreferrer">
            View Location <span>→</span>
          </a>
          <a className="secondary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Confirm on WhatsApp
          </a>
        </div>

        <footer className="footer-note">
          <span>♡</span>
          We can’t wait to celebrate with you!
          <span>♡</span>
        </footer>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
