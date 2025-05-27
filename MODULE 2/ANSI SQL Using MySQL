-- Exercise 1: User Upcoming Events
SELECT e.title, e.city, e.start_date
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
JOIN Users u ON r.user_id = u.user_id
WHERE e.status = 'upcoming' AND e.city = u.city
ORDER BY e.start_date;

-- Exercise 2: Top Rated Events (min 10 feedbacks)
SELECT e.title, AVG(f.rating) AS avg_rating
FROM Feedback f
JOIN Events e ON f.event_id = e.event_id
GROUP BY f.event_id
HAVING COUNT(*) >= 10
ORDER BY avg_rating DESC;

-- Exercise 3: Inactive Users (no recent registrations in 90 days)
SELECT u.*
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
WHERE r.registration_date IS NULL
   OR r.registration_date < CURDATE() - INTERVAL 90 DAY;

-- Exercise 4: Peak Session Hours (sessions 10 AM - 12 PM)
SELECT e.title, COUNT(*) AS session_count
FROM Sessions s
JOIN Events e ON s.event_id = e.event_id
WHERE TIME(s.start_time) BETWEEN '10:00:00' AND '12:00:00'
GROUP BY e.event_id;

-- Exercise 5: Most Active Cities (top 5 by unique users)
SELECT u.city, COUNT(DISTINCT r.user_id) AS total_users
FROM Registrations r
JOIN Users u ON r.user_id = u.user_id
GROUP BY u.city
ORDER BY total_users DESC
LIMIT 5;

-- Exercise 6: Event Resource Summary (pdfs, images, links)
SELECT e.title,
  SUM(resource_type = 'pdf') AS pdfs,
  SUM(resource_type = 'image') AS images,
  SUM(resource_type = 'link') AS links
FROM Resources r
JOIN Events e ON r.event_id = e.event_id
GROUP BY r.event_id;

-- Exercise 7: Low Feedback Alerts (rating < 3)
SELECT u.full_name, f.comments, e.title
FROM Feedback f
JOIN Users u ON f.user_id = u.user_id
JOIN Events e ON f.event_id = e.event_id
WHERE f.rating < 3;

-- Exercise 8: Sessions per Upcoming Event
SELECT e.title, COUNT(s.session_id) AS session_count
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id;

-- Exercise 9: Organizer Event Summary
SELECT u.full_name, e.status, COUNT(*) AS event_count
FROM Events e
JOIN Users u ON e.organizer_id = u.user_id
GROUP BY u.user_id, e.status;

-- Exercise 10: Feedback Gap (registered events with no feedback)
SELECT DISTINCT e.title
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON r.event_id = f.event_id
WHERE f.feedback_id IS NULL;

-- Exercise 11: Daily New User Count (last 7 days)
SELECT registration_date, COUNT(*) AS new_users
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY registration_date;

-- Exercise 12: Event with Maximum Sessions
SELECT e.title, COUNT(s.session_id) AS total_sessions
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id
ORDER BY total_sessions DESC
LIMIT 1;

-- Exercise 13: Average Rating per City
SELECT e.city, AVG(f.rating) AS avg_rating
FROM Feedback f
JOIN Events e ON f.event_id = e.event_id
GROUP BY e.city;

-- Exercise 14: Most Registered Events (top 3)
SELECT e.title, COUNT(r.registration_id) AS registrations
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id
ORDER BY registrations DESC
LIMIT 3;

-- Exercise 15: Event Session Time Conflict (overlapping sessions)
SELECT a.session_id AS session1, b.session_id AS session2, a.event_id
FROM Sessions a
JOIN Sessions b ON a.event_id = b.event_id AND a.session_id < b.session_id
WHERE a.start_time < b.end_time AND b.start_time < a.end_time;

-- Exercise 16: Unregistered Active Users (joined in 30 days, no registrations)
SELECT u.*
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
WHERE u.registration_date >= CURDATE() - INTERVAL 30 DAY
  AND r.user_id IS NULL;

-- Exercise 17: Multi-Session Speakers
SELECT speaker_name, COUNT(*) AS total_sessions
FROM Sessions
GROUP BY speaker_name
HAVING total_sessions > 1;

-- Exercise 18: Resource Availability Check (events with no resources)
SELECT e.title
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
WHERE r.resource_id IS NULL;

-- Exercise 19: Completed Events with Feedback Summary
SELECT e.title,
  COUNT(DISTINCT r.user_id) AS total_registrations,
  AVG(f.rating) AS avg_rating
FROM Events e
LEFT JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id;

-- Exercise 20: User Engagement Index (events attended & feedbacks given)
SELECT u.full_name,
  COUNT(DISTINCT r.event_id) AS events_attended,
  COUNT(DISTINCT f.feedback_id) AS feedbacks_given
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
LEFT JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id;

-- Exercise 21: Top Feedback Providers (top 5)
SELECT u.full_name, COUNT(f.feedback_id) AS total_feedbacks
FROM Feedback f
JOIN Users u ON f.user_id = u.user_id
GROUP BY f.user_id
ORDER BY total_feedbacks DESC
LIMIT 5;

-- Exercise 22: Duplicate Registrations Check
SELECT user_id, event_id, COUNT(*) AS reg_count
FROM Registrations
GROUP BY user_id, event_id
HAVING reg_count > 1;

-- Exercise 23: Registration Trends (month-wise for 12 months)
SELECT DATE_FORMAT(registration_date, '%Y-%m') AS month, COUNT(*) AS total_regs
FROM Registrations
WHERE registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY month
ORDER BY month;

-- Exercise 24: Average Session Duration per Event (in minutes)
SELECT e.title,
  AVG(TIMESTAMPDIFF(MINUTE, s.start_time, s.end_time)) AS avg_duration_minutes
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id;

-- Exercise 25: Events Without Sessions
SELECT e.title
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE s.session_id IS NULL;
