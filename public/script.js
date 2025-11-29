document.addEventListener('DOMContentLoaded', () => {
    const talks = [
        {
            time: '10:00 AM - 11:00 AM',
            title: 'The Future of Artificial Intelligence',
            speakers: ['Dr. Evelyn Reed'],
            categories: ['AI', 'Machine Learning'],
            description: 'A deep dive into the latest advancements in AI and what to expect in the coming years.'
        },
        {
            time: '11:10 AM - 12:10 PM',
            title: 'Building Scalable Web Applications',
            speakers: ['John Doe', 'Jane Smith'],
            categories: ['Web Development', 'Scalability'],
            description: 'Learn the best practices for designing and building web applications that can handle millions of users.'
        },
        {
            time: '12:10 PM - 1:10 PM',
            title: 'Lunch Break',
            isBreak: true
        },
        {
            time: '1:10 PM - 2:10 PM',
            title: 'Cybersecurity in the Modern Age',
            speakers: ['Alex Williams'],
            categories: ['Cybersecurity', 'InfoSec'],
            description: 'An overview of the current cybersecurity landscape and how to protect your organization from threats.'
        },
        {
            time: '2:20 PM - 3:20 PM',
            title: 'The Power of Quantum Computing',
            speakers: ['Dr. Ben Carter'],
            categories: ['Quantum Computing', 'Physics'],
            description: 'Explore the mind-bending world of quantum computing and its potential to revolutionize technology.'
        },
        {
            time: '3:30 PM - 4:30 PM',
            title: 'Data Visualization for Storytelling',
            speakers: ['Chloe Garcia'],
            categories: ['Data Science', 'Visualization'],
            description: 'Discover how to use data visualization to tell compelling stories and communicate insights effectively.'
        },
        {
            time: '4:40 PM - 5:40 PM',
            title: 'The Ethics of AI',
            speakers: ['Dr. Isabella Rossi'],
            categories: ['AI', 'Ethics'],
            description: 'A thought-provoking discussion on the ethical implications of artificial intelligence and how we can ensure its responsible development.'
        }
    ];

    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('searchInput');

    function renderSchedule(filter = '') {
        scheduleContainer.innerHTML = '';
        const filteredTalks = talks.filter(talk => {
            if (talk.isBreak) return true;
            if (filter === '') return true;
            return talk.categories.some(category => category.toLowerCase().includes(filter.toLowerCase()));
        });

        filteredTalks.forEach(talk => {
            const talkElement = document.createElement('div');
            if (talk.isBreak) {
                talkElement.className = 'break';
                talkElement.innerHTML = `<div class="talk-time">${talk.time}</div><div>${talk.title}</div>`;
            } else {
                talkElement.className = 'talk';
                talkElement.innerHTML = `
                    <div class="talk-time">${talk.time}</div>
                    <div class="talk-title">${talk.title}</div>
                    <div class="talk-speakers">By: ${talk.speakers.join(', ')}</div>
                    <div class="talk-description">${talk.description}</div>
                    <div class="talk-category">
                        ${talk.categories.map(cat => `<span>${cat}</span>`).join('')}
                    </div>
                `;
            }
            scheduleContainer.appendChild(talkElement);
        });
    }

    searchInput.addEventListener('input', (e) => {
        renderSchedule(e.target.value);
    });

    renderSchedule();
});
