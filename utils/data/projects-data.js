import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Ourmarket',
        description: "Crafted on e-commerce platform for a Nigerian bank, seamlessly integrating a user-friendly application, an empowered vendor dashboard, and a comprehensive admin control app. The platform boasts a responsive design across all devices and ensures secure transactions, providing a dynamic and scalar online marketplace.",
        tools: ['Vue.js', 'Vuetify', 'Node.js', 'MongoDB', 'Nginx', 'Kubernetes', 'Docker'],
        role: 'Full stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Guardtour',
        description: 'The Guard Tour app employs IoT technology to monitor security personnel in real-time, offering a solution that delivers comprehensive reports. These reports provide accurate insights into the performance of the security team.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Front end Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'SPOC',
        description: 'SPOC application utilizes advanced algorithms, analyzing user-inputted responses of comprehensively assess and identify potential cancer stages. This innovative approach delivers a personalized and insightful understanding of health conditions based on unique symptoms and responses.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'AWS Cloud-based Email Management System',
        description: "I Developed a cloud-based user interface for a system deployed on Amazon EC2 to handle user-submitted email IDs and file attachments. Utilized AWS Lambda to trigger backend processes, storing emails in an AWS database and files in an S3 Bucket. Integrated AWS SNS to efficiently send emails to the specified recipients.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Developer',
    },
    {
        id: 5,
        name: 'Packet switching using TCP and UDP',
        description: "Implemented TCP and UDP communication protocols between client and server computers over a local network. Facilitated data transfer between devices using TCP and UDP network modes.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Developer',
    },
    {
        id: 6,
        name: 'Coupon management system',
        description: "The Coupon Management System, powered by React.js, and HTML, revolutionizes coupon administration with precision targeting and real-time analytics. Seamlessly integrating digital channels for coupon distribution and redemption, it enhances user experience and boosts brand loyalty.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full stack Developer',
    },
    {
        id: 7,
        name: 'SEMAS',
        description: "Developed a Digital Medical Management System to streamline appointment scheduling, patient data storage, and prescription archiving. Implemented innovative features to enhance patient experience and improve medical data management. Developed the project using HTML, JS, CSS and MySQL database for storage and retrieval of data.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },