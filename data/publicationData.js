import aellaImg from '../images/thumbnailImages/Aella.png'
import visualLangDS_Img from '../images/thumbnailImages/aellaVisualLanguage.gif'
import figmaImg from '../images/thumbnailImages/Illustration.png'
import kongaImg from '../images/thumbnailImages/Konga.png'
import objectImg from '../images/thumbnailImages/OOD.png'
import loveImg from '../images/thumbnailImages/loveCover.png'

export const publicationData = {
    publication: [
        {
            id: "portfolio_file",
            title: "Selected works 🧑🏾‍💻",
            docThumbnailProjects: [
                {
                    title: 'Fintech App Design process',
                    imgUrl: aellaImg,
                    newTab: false,
                    live: true,
                    link: '/projects/aellaFinanceApp/aellaFinDesignProcess',
                    tags: 'Fintech, UIDesign, UXDesign',
                    description: 'Finance is complex enough. People and Businesses deserve easy, straightforward products that works. Aella makes...'
                },
                {
                    title: 'Design System for Visual Branding',
                    imgUrl: visualLangDS_Img,
                    newTab: false,
                    live: true,
                    link: '/projects/aellaVisualDS/aellaVisualDS',
                    tags: 'Design Systems, Visual language, Branding',
                    description: 'Design system for visual branding increases consistency across digital assets used for marketing and advertisement...'
                },
                
                {
                    title: 'Scaling and maintancing design systems for ecomerce',
                    imgUrl: kongaImg,
                    newTab: false,
                    live: true,
                    link: '/projects/konga/kongaDesignProcess',
                    tags: 'E-commerce, Design system, UIDesign, UXDesign',
                    description: `Konga is one of Nigeria's largest online mall. offering products that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances...`
                },

                {
                    title: 'How my design became a moment in a love story',
                    imgUrl: loveImg,
                    newTab: true,
                    live: true,
                    link: 'https://medium.com/@dareoni/how-my-design-became-a-moment-in-a-love-story-1f9d55d9d92c',
                    tags: 'UI/UX, Design Thinking, Interaction Design',
                    description: `It’s been more than a decade since I started exploring visual design, I started as a graphic designer...`
                }
            ],

            docThumbnailArticles: [
                {
                    title: 'Object-Oriented Design paradigm for building User Interfaces',
                    imgUrl: objectImg,
                    newTab: true,
                    live: true,
                    link: 'https://dareoni.medium.com/object-oriented-design-paradigm-for-building-user-interfaces-ee13aa2f6726',
                    tags: 'Object-Oriented Design, Design Thinking, UIDesign',
                    description: 'In the digital world, digital objects such as (buttons, headers, footers, input fields, etc.) have similarities with physical things we see regularly...'
                },
                {
                    title: 'Digital Illustrating with Figma',
                    imgUrl: figmaImg,
                    newTab: true,
                    live: true,
                    link: 'https://medium.com/figma-africa/making-illustrations-with-figma-2fb23749907',
                    tags: 'Illustration, Figma, Vector Tools',
                    description: 'A lot of designers think Figma is just meant for UI design and prototyping. But Figma is great for making flat illustrations and icons, and this is a great way...'
                }
            ]
        },
    ]
}