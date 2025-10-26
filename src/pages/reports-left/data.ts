import blogImg1 from '@/assets/img/updates/blog/Tubectomy surgery-4.jpeg';
import blogImg2 from '@/assets/img/updates/blog/Adarsh.jpg';
import caseStudyImg from '@/assets/img/updates/casestudies/Anitha Thati.jpg';

export const categories = ["Blog", "Case Studies", "Media", "Editorial", "Interview", "Opinion", "Events"];

export const categoryContent: Record<
    string,
    {
        type: 'single' | 'multi';
        title?: string;
        image?: string;
        video?: string;       // new field for mp4 video
        youtube?: string;     // new field for YouTube link
        sections?: {
            image?: string;
            subtitle?: string;
            title?: string;
            paragraphs: string[];
        }[];
    }
> = {
    Blog: {
        type: 'multi',
        sections: [
            {
                image: blogImg1,
                title: 'Empowering Tribal Women Aware About Family Planning Initiatives',
                paragraphs: [
                    'Long before IDO started its work in Gattumalla, women in tribal habitations were unaware of Family Planning Surgery. This often led to situations where they had no spacing between children impacting their reproductive health. Fear of hospital admission forced them to visit traditional healers, known as Vadde’. They used to administer traditional medicines as a contraceptive. It often failed resulting in various health issues. ',
                    'In the interior hamlets, most of the women are anaemic due to lack of nutritional support. This resulted in pre-term deliveries, low-birth weight babies, high risk pregnancies and poor health outcomes for both mothers and infants. Most importantly, lack of access to health facilities has led many women bear large families, giving birth to 7-8 children and in some cases even up to 11 children.',
                    'This affected the health of already malnourished and anaemic women. It can get lead to a serious illness, if left untreated. There had been instances where Elderly women between 45 – 50 years were pregnant risking both mother and child lives. It is only after Community Health Workers (CHWs) started visiting, a change begun. By educating women and men about the benefits of Family Planning surgery, they were able to overcome misconceptions. With their continuous efforts, the communities trust in medical practices grew, and women began to understand the importance of reproductive health.',
                    'To avoid impending health burden on women, Indigenous Development organisation - IDO started Family Planning Initiative including both Tubectomy and Birth Spacing (Copper – T). The shift from traditional practices to modern, scientifically backed methods like Mini-Laparoscopy and Tubectomy surgeries not only empowered women but also encouraged family participation. Now, couples are involved in the decision-making process, with both partners receiving counseling at IDO– Health Center. ',
                    'Our Doctors interact with both husbands and wives, explains about the DO’s and Don’t’s to help them get a holistic view about the procedure. All the pre-surgery blood tests and post care till next 3 days is provided at the centre ensuring that every patient receives complete and compassionate care throughout the process. This transformation has enabled women to experience healthier pregnancies, better maternal health, and, ultimately, healthier families.',
                ]
            },
            {
                image: blogImg2,
                title: 'Adarsh – Empowering Tribal Students with Digital Education',
                paragraphs: [
                    'Indigenous Development Organiation ((IDO) is proud to acknowledge Adarsh Vikas Sriram for his inspiring social initiative that seeks to enhance digital learning opportunities for tribal students in Bhadradri, Kothagudem district.',
                    'Adarsh passion for tackling literacy challenges in remote hamlets led him to collaborate with IDO. With the guidance of our team, his vision transformed into a meaningful project. His valuable efforts resulted in equipping 13 Bridge schools with Solar TVs each worth Rs. 45,000, offering over 450 tribal children access to digital education.',
                    'In recognition of his outstanding work, we invited him to inaugurate the Solar TV project in a Bridge school at Yerrakunta habitation. The children and community members were thrilled to experience this new technology, something they had never seen before.',
                    'We celebrated Adarsh as a ‘Champion of Change’ at the IDO Health Centre, honoring his role in advancing digital literacy in tribal communities where access to electricity is scarce. His parents, Ms. Geethalakshmi G and Mr. Sriram, also joined the event.',
                    'At such a young age, Adarsh commitment to bridging the digital divide showcases remarkable leadership and compassion. IDO is privileged to support Adarsh in his impactful mission, and we believe his work will inspire others to contribute to the development of underserved communities.'
                ]
            }
        ]
    },
    "Case Studies": {
        type: 'single',
        title: 'Effective Application of Maternal Health Training by AAMPodiyam Sirisha in a Critical Emergency Delivery',
        image: caseStudyImg,
        sections: [
            {
                subtitle: 'Background:',
                paragraphs: [
                    'On August 28, 2025, 23-year-old Thati Anitha, who was in active labour, was being carried in a makeshift stretcher (Doli) by a group of men toward the nearest healthcare facility. This took place in Pittathogu, a remote tribal village in Pinapaka mandal, Bhadradri Kothagudem district, located about 10 kilometers from the main road.',
                    'The scene was noticed by the husband of Community Health Worker (CHW) Podiyam Sirisha while he was out fetching water. Realizing the urgency, he immediately informed his wife. Unaware of the situation, Sirisha quickly took a neighbor’s help and rushed to reach Anitha on a bike.',
                    'Upon reaching the group, Sirisha learned from Anitha’s father-in-law that they had earlier gone to her home seeking help, but she wasn’t there. With no other option, the men had taken turns carrying Anitha through muddy, rain-soaked paths to get her to safety. Sirisha too walked along with them as the bike malfunctioned due to muddy waters.',
                    'Anitha was eventually taken in an ambulance toward Munuguru Area Hospital, but the situation took an unexpected turn during the journey. Prior to this, CHW during her home visits counselled Anitha and her family to opt for Institutional Delivery.'
                ]
            },
            {
                subtitle: 'Emergency Situation:',
                paragraphs: [
                    'During the transit, Anitha went into advanced labour and delivered a healthy baby girl inside the ambulance. However, following the birth, the placenta was not expelled, a critical condition that can lead to severe complications such as postpartum hemorrhage if not addressed promptly.',
                    'The ambulance staff, though supportive, were uncertain about the next course of action. Realising the urgency of the situation, AAM Sirisha recalled her training under the Strengthening Primary Healthcare through Participatory Action Research (SPHPAR) program, which emphasizes evidence-based practices in maternal and newborn care.'
                ]
            },
            {
                subtitle: 'Intervention:',
                paragraphs: [
                    'Drawing on her training, Sirisha suggested initiating immediate breastfeeding, which is known to naturally stimulate the release of oxytocin, a hormone that helps the uterus contract and facilitates placental expulsion. The staff nurse in the ambulance was unfamiliar with this approach in the emergency situation and showed resistance. She immediately called the Medical Officer and Doctor to inform about the situation and was advised to make arrangements to deliver the placenta.',
                    'However, with Sirisha remaining resolute about the knowledge she gained from training, with informed consent from the mother, she supported Anitha in initiating breastfeeding. Within ten minutes, the placenta was successfully delivered without any further complications.'
                ]
            },
            {
                subtitle: 'Outcome:',
                paragraphs: [
                    'Upon arrival at Munuguru Area Hospital, the Gynecologist and Delivery staff appreciated Sirisha and inquired how she knew about the approach while their staff was unaware. She revealed about IDOs training that helped gain the knowledge. The entire hospital staff applauded her efforts and presence of mind in a critical situation where skilled staff was unable to recall what they needed to do.'
                ]
            },
            {
                subtitle: 'Conclusion:',
                paragraphs: [
                    'AAM Podiyam Sirisha’s quick thinking, professional courage, and application of her knowledge showcases the key role that skilled community health workers play in maternal and newborn health care. Her intervention not only ensured the safety of both mother and child but also emphasized the importance of investment in capacity building under initiatives like SPHPAR.'
                ]
            }
        ]
    },
    Media: { type: 'single', sections: [] },
    Editorial: { type: 'single', sections: [] },
    Interview: { type: 'single', sections: [] },
    Opinion: { type: 'single', sections: [] },
    Events: { type: 'single', sections: [] }
};
