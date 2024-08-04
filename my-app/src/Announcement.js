import React, { useState } from 'react';
import './Announcement.css';

const announcements = [
  { title: 'Announcement 1', date: '2023-08-01', description: 'Description for announcement 1.' },
  { title: 'Announcement 2', date: '2023-07-25', description: 'Description for announcement 2.' },
  { title: 'Announcement 3', date: '2023-07-15', description: 'Description for announcement 3.' },
  { title: 'Announcement 4', date: '2023-06-30', description: 'Description for announcement 4.' },
  { title: 'Announcement 5', date: '2023-06-15', description: 'Description for announcement 5.' },
  // Add more announcements as needed
];

const Announcement = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const sortedAnnouncements = [...announcements].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const loadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, sortedAnnouncements.length));
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-us', { month: 'short' });
    const year = dateObj.getFullYear();
    return { day, month, year };
  };
  return (
    <div className="announcement-board">
      <h3>Announcements</h3>
      <div className="announcements-list">
        {sortedAnnouncements.slice(0, visibleCount).map((announcement, index) => {
          const { day, month, year } = formatDate(announcement.date);
          return (
            <div key={index} className="announcement-item">
              <div className="date-container">
                <div className="date-day">{day}</div>
                <div className="date-month">{month}</div>
                <div className="date-year">{year}</div>
              </div>
              <div className="announcement-content">
                <h4>{announcement.title}</h4>
                <p>{announcement.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {visibleCount < sortedAnnouncements.length && (
        <button className="load-more-button" onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default Announcement;