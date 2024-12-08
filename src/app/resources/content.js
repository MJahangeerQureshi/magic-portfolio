import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'M Jahangeer',
    lastName:  'Qureshi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Machine Learning Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/karachi',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Urdu', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/MJahangeerQureshi',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/mjahangeerqureshi/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:m.jahangeer.qureshi@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Professional Portfolio`,
    description: `Showcasing projects and innovations as a ${person.role}`,
    headline: <>Technical leadership and innovation</>,
    subline: <>I'm M Jahangeer, a Technical Project Manager at <InlineCode>CplusSoft</InlineCode>, where I lead cutting-edge tech projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>M Jahangeer is a seasoned Technical Project Manager based in Pakistan, with a strong background in AI, software development, and team leadership. He is dedicated to transforming complex challenges into actionable solutions through technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'CplusSoft',
                timeframe: '2024 - Present',
                role: 'Technical Project Manager',
                achievements: [
                    <>Led multiple AI and software development projects, significantly improving project delivery times and operational efficiency.</>,
                    <>Implemented innovative AI solutions that have dramatically improved client satisfaction and business outcomes.</>
                ],
                images: []
            },
            {
                company: 'Entropy-X',
                timeframe: '2020 - 2024',
                role: 'Principal ML Engineer',
                achievements: [
                    <>Orchestrated the creation and ongoing support of a chatbot system for prominent U.S. East Coast fast food chains, including Papa John’s, Pepperonis, and Hungry Howies. This solution processes over a million orders monthly, significantly boosting customer satisfaction and revenue growth.</>,
                    <>Led the development of a comprehensive IDP system utilized by major UAE banks such as ADIB, RakBank, and Haifin. This system processes over half a million documents monthly, enhancing data entry and KYC operations, thereby reducing costs and increasing operational efficiency.</>,
                    <>Pioneered an AI-powered invoice verification tool as part of the UAE Trade Connect initiative by Etisalat (Haifin). This tool drastically cuts down on trade finance fraud for major financial institutions like First Abu Dhabi Bank, Emirates NBD, and Abu Dhabi Commercial Bank.</>,
                    <>Developed an AI-driven surveillance system capable of performing facial recognition and language-image forensic searches, reducing search times from 2.5 seconds to 3.3 milliseconds per image, greatly enhancing security and response times.</>,
                    <>Engineered a cutting-edge cell segmentation system that reduces the time needed for medical professionals to evaluate cancer cell migrations from 20 hours to 40 seconds.</>,
                    <>Contributed to the AI backend for Xeric.AI, an AIOps platform that accelerates error detection in software systems from weeks to days, enhancing system reliability and efficiency, supported by a scholarly publication.</>
                ],
                images: [ ]
            },
            {
                company: 'Tintash',
                timeframe: '2018 - 2020',
                role: 'Data Scientist',
                achievements: [
                    <>Engineered an AI-based classification system that streamlined the assessment of technical issues, reducing the evaluation time from 1.5 hours to just 7 minutes. This advancement significantly enhanced productivity by expediting problem resolution processes.</>,
                    <>Designed and developed a sophisticated translation system capable of supporting real-time, voice-to-voice conversations across 50 languages. This innovation enabled seamless multilingual communications, broadening the scope of global interactions for users.</>
                    ],
                images: [ ]
            },
            {
                company: 'Junior Machine Learning Engineer',
                timeframe: '2017 - 2018',
                role: 'Principal ML Engineer',
                achievements: [
                    <>Collaborated with academic luminaries on trailblazing research, integrating modern AI methodologies into Brain-Controlled Prostheses. Published 3 impactful papers showcasing the groundbreaking results.</>
                ],
                images: [ ]
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Air University',
                description: <>Bachelor of Engineering in Mechatronics, focused on integrating mechanical, electrical, and computer engineering.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'AI & Machine Learning',
                description: <>Expert in AI frameworks like PyTorch and TensorFlow, skilled in developing and deploying scalable ML models.</>,
                images: []
            },
            {
                title: 'Project Management',
                description: <>Strong proficiency in Agile and Scrum methodologies, with a track record of successful project delivery.</>,
                images: []
            },
            {
                title: 'Software Development',
                description: <>Experienced in backend and frontend development, particularly with Python, JavaScript, and related frameworks.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };