<script setup>
import { ref, reactive } from 'vue';
import Navigation from './Navigation.vue';

const BASE_URL = import.meta.env.BASE_URL || '/';

let publication_types = ref([
    {key: 'conferences', text: 'Conference and Workshop Papers'},
    {key: 'journals', text: 'Journal Articles'},
    {key: 'posters', text: 'Posters'},
    {key: 'thesis', text: 'Thesis'},
    {key: 'other', text: 'Other'}
]);

let publications = reactive({
    conferences: [
        {
            title: 'Bridging Gaps in Simulation Analysis through a General Purpose, Bidirectional Steering Interfacec with Ascent',
            year: '2024',
            authors: 'Andres Sewell Dimitrios K. Fytanidis, Victor A. Mateevitsi, Cyrus Harrison, Nicole Marsaglia, Thomas Marrinan, Silvio Rizzi, Joseph A. Insley, Michael E. Papka, and Steve Petruzza',
            venue: 'In Proceedings of the 2024 Workshop on In Situ Infrastructures for Enabling Extreme-scale Analysis and Visualization (ISAV), 2024',
            award: 'winner'
        },
        {
            title: 'Image Synthesis from a Collection of Depth Enhanced Panoramas: Creating Interactive Extended Reality Experiences from Static Images',
            year: '2024',
            authors: 'Thomas Marrinan, Ethan Honzik, Hal L. N. Brynteson, and Michael E. Papka',
            venue: 'In Proceedings of the 2024 ACM International Conference on Interactive Media Experiences (IMX), 2024, pp. 64-74',
            doi: 'https://doi.org/10.1145/3639701.3656312'
        },
        {
            title: 'Leveraging AI to Generate Audio for User-generated Content in Video Games',
            year: '2024',
            authors: 'Thomas Marrinan, Pakeeza Akram, Oli Gurmessa, and Anthony Shishkin',
            venue: 'In Proceedings of the 2024 Workshop on Generative AI and HCI (GenAICHI), 2024',
            doi: 'https://doi.org/10.48550/arXiv.2404.17018'
        },
        {
            title: 'Interactive Virtual Reality Exploration of Large-scale Datasets using Omnidirectional Stereo Images',
            year: '2022',
            authors: 'Thomas Marrinan, Jifu Tan, Joseph A. Insley, Alina Kanayinkal1, and Michael E. Papka',
            venue: 'In Advances in Visual Computing; Proceedings of the 2022 International Symposium on Visual Computing (ISVC), 2022, pp. 115-128',
            doi: 'https://doi.org/10.1007/978-3-031-20713-6_9'
        },
        {
            title: 'GPU-based Image Compression for Efficient Compositing in Distributed Rendering Applications',
            year: '2021',
            authors: 'Riley Lipinksi, Kenneth Moreland, Michael E. Papka, and Thomas Marrinan',
            venue: 'In Proceedings of the 2021 IEEE 11th Symposium on Large Data Analysis and Visualization (LDAV \'21), 2021, pp. 43-52',
            doi: 'https://doi.org/10.1109/LDAV53230.2021.00012'
        },
        {
            title: 'Enabling Collaborative Interaction with 360° Panoramas between Large-scale Displays and Immersive Headsets',
            year: '2021',
            authors: 'Leah Emerson, Riley Lipinski, Heather Shirey, Theresa Malloy, and Thomas Marrinan',
            venue: 'In Proceedings of the 2021 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct \'21), 2021, pp. 183-188',
            doi: 'https://doi.org/10.1109/ISMAR-Adjunct54149.2021.00045'
        },
        {
            title: 'Mixed Reality Collaboration for Contextualizing Immersive Spaces',
            year: '2020',
            authors: 'Thomas Marrinan, Leah Emerson, Theresa Malloy, and Heather Shirey',
            venue: 'In Proceedings of the 2020 Workshop on Social VR: A New Medium for Remote Communication and Collaboration (SocialVR), 2020',
            link_text: 'https://www.academia.edu/42951228/Mixed_Reality_Collaboration_for_Contextualizing_Immersive_Spaces',
            link_url: 'https://www.academia.edu/42951228/Mixed_Reality_Collaboration_for_Contextualizing_Immersive_Spaces'
        },
        {
            title: 'PxStream: Remote Visualization for Distributed Rendering Frameworks',
            year: '2019',
            authors: 'Thomas Marrinan, Silvio Rizzi, Joseph A. Insley, Lance Long, Luc Renambot, and Michael E. Papka',
            venue:  'In Proceedings of the 2019 IEEE 9th Symposium on Large Data Analysis and Visualization (LDAV \'19), 2019, pp. 37-41',
            doi: 'https://doi.org/10.1109/LDAV48142.2019.8944369'
        },
        {
            title: 'Transferring Data from High-Performance Simulations to Extreme Scale Analysis Applications in Real-Time',
            year: '2018',
            authors: 'Thomas Marrinan, Silvio Rizzi, Joseph A. Insley, Brian Toonen, William Allcock, and Michael E. Papka',
            venue: 'In Proceedings of the 2018 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW \'18), 2018, pp. 2114-1220',
            doi: 'https://doi.org/10.1109/IPDPSW.2018.00188'
        },
        {
            title: 'A Path from Serial Execution to Hybrid Parallelization for Learning HPC',
            year: '2017',
            authors: 'Tommy Franczak, Asare Nkansah, Thomas Marrinan, and Michael E. Papka',
            venue: 'In Proceeding of the 2017 Workshop on Education for High-Performance Computing (EduHPC), 2017, to be published',
            link_text: 'https://tcpp.cs.gsu.edu/curriculum/sites/default/files/paper%2017_1.pdf',
            link_url: 'https://tcpp.cs.gsu.edu/curriculum/sites/default/files/paper%2017_1.pdf'
        },
        {
            title: 'StickySchedule: An Interactive Multi-user Application for Conference Scheduling on Large-scale Shared Displays',
            year: '2017',
            authors: 'Vishal Doshi, Sneha Tuteja, Krishna Bharadwaj, Davide Tantillo, James Patton, Thomas Marrinan, and G. Elisabeta Marai',
            venue: 'In Proceedings of the ACM International Symposium on Pervasive Displays (PerDis \'17), 2017, article 2',
            doi: 'https://doi.org/10.1145/3078810.3078817'
        },
        {
            title: 'Automated Dynamic Data Redistribution',
            year: '2017',
            authors: 'Thomas Marrinan, Joseph A. Insley, Silvio Rizzi, and Michael E. Papka',
            venue: 'In Proceedings of the 2017 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW \'17), 2017, pp. 1208-1215',
            doi: 'https://doi.org/10.1109/IPDPSW.2017.17'
        },
        {
            title: 'Mixed Presence Collaboration using Scalable Visualizations in Heterogeneous Display Spaces',
            year: '2017',
            authors: 'Thomas Marrinan, Jason Leigh, Luc Renambot, Angus Forbes, Steve Jones, and Andrew Johnson',
            venue: 'In Proceedings of the 2017 ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW \'17), 2017, pp. 2236-2245',
            doi: 'https://doi.org/10.1145/2998181.2998346'
        },
        {
            title: 'Interactive Multi-Modal Display Spaces for Visual Analysis',
            year: '2016',
            authors: 'Thomas Marrinan, Arthur Nishimoto, Joseph A. Insley, Silvio Rizzi, Andrew Johnson, and Michael E. Papka',
            venue: 'In Proceedings of the 2016 ACM International Conference on Interactive Surfaces and Spaces (ISS \'16), 2016, pp. 421-426',
            doi: 'https://doi.org/10.1145/2992154.2996792'
        },
        {
            title: 'Synchronized Mixed Presence Data-Conferencing Using Large-Scale Shared Displays',
            year: '2016',
            authors: 'Thomas Marrinan, Luc Renambot, Jason Leigh, Angus Forbes, Steve Jones, and Andrew Johnson',
            venue: 'In Proceedings of the 2016 ACM International Conference on Interactive Surfaces and Spaces (ISS \'16), 2016, pp. 355-360',
            doi: 'https://doi.org/10.1145/2992154.2996780'
        },
        {
            title: 'SAGE2: A New Approach for Data Intensive Collaboration Using Scalable Resolution Shared Displays',
            year: '2014',
            authors: 'Thomas Marrinan, Jillian Aurisano, Arthur Nishimoto, Krishna Bharadwaj, Victor Mateevitsi, Luc Renambot, Lance Long, Andrew Johnson, and Jason Leigh',
            venue: 'In Proceedings of the IEEE International Conference on Collaborative Computing: Networking, Applications and Worksharing (CollaborateCom \'14), 2014, pp. 177-186',
            doi: 'https://doi.org/10.4108/icst.collaboratecom.2014.257337',
            award: 'winner'
        },
        {
            title: 'Multivariate Visualization of Chromatographic Systems',
            year: '2011',
            authors: 'Timothy Urness, Thomas Marrinan, Andrew R. Johnson, and Mark F. Vitha',
            venue: 'In Proceedings of SPIE-IS&T Electronic Imaging, 2011, vol. 7868',
            doi: 'https://doi.org/10.1117/12.872020'
        }
    ],
    journals: [
        {
            title: 'Real-Time Omnidirectional Stereo Rendering: Generating 360° Surround-View Panoramic Images for Comfortable Immersive Viewing',
            year: '2021',
            authors: 'Thomas Marrinan and Michael E. Papka',
            venue: 'In IEEE Transactions on Visualization and Computer Graphics, 2021, vol. 27, no. 5, pp. 2587-2596',
            doi: 'https://doi.org/10.1109/TVCG.2021.3067780',
            award: 'nomination'
        },
        {
            title: 'Parallel Streaming between Heterogeneous HPC Resources for Real-time Analysis',
            year: '2019',
            authors: 'Thomas Marrinan, Greg Eisenhauer, Matthew Wolf, Joseph A. Insley, Silvio Rizzi, and Michael E. Papka',
            venue: 'In Journal of Computational Science, 2019, vol. 31, pp. 163-171',
            doi: 'https://doi.org/10.1016/j.jocs.2019.01.003'
        },
        {
            title: 'SAGE2: A Collaboration Portal for Scalable Resolution Displays',
            year: '2016',
            authors: 'Luc Renambot, Thomas Marrinan, Jillian Aurisano, Arthur Nishimoto, Victor Mateevitsi, Krishna Bharadwaj, Lance Long, Andy Johnson, Maxine Brown, and Jason Leigh',
            venue: 'In Future Generation Computer Systems, 2016, vol. 54, pp. 296-305',
            doi: 'https://doi.org/10.1016/j.future.2015.05.014'
        },
        {
            title: 'Cerebral Microcirculation and Oxygen Tension in the Human Secondary Cortex',
            year: '2013',
            authors: 'A. A. Linninger, I. G. Gould, T. Marrinan, C.-Y. Hsu, M. Chojecki, and A. Alaraj',
            venue: 'In Annals of Biomedical Engineering, 2013, vol. 41, no. 11, pp. 2264-2284',
            doi: 'https://doi.org/10.1007/s10439-016-1722-3'
        },
        {
            title: 'Hemodynamics of Cerebral Micro Vasculature',
            year: '2012',
            authors: 'Ian Gould, Thomas Marrinan, Maurice Chojecki, Masood Qader, Brian Henry, Mohammed Pervais, Nicholas Vaičaitis, Yiyi Zhu, Aaron Rogers, and Andreas Linninger',
            venue: 'In Computer Aided Chemical Engineering, 2012, vol. 31, pp. 1727-1731',
            doi: 'https://doi.org/10.1016/B978-0-444-59506-5.50176-0'
        },
        {
            title: 'Understanding and Interpreting Multivalued Astronomical Data',
            year: '2010',
            authors: 'Thomas Marrinan,Timothy Urness, Charles Nelson, Kory Kreimeyer, and Jordan Mirocha',
            venue: 'In IEEE Computer Graphics and Applications, 2010, vol. 30, no. 5, pp. 12-17',
            doi: 'https://doi.org/10.1109/MCG.2010.97'
        },
        {
            title: 'System Selectivity Cube: A 3D Visualization Tool for Comparing the Selectivity of Gas Chromatography, Supercritical-Fluid Chromatography, High-Pressure Liquid Chromatography, and Micellar Electrokinetic Capillary Chromatography Systems',
            year: '2010',
            authors: 'Andrew R. Johnson, Mark F. Vitha, Timothy Urness, and Thomas Marrinan',
            venue: 'In Analytical Chemistry, 2010, vol. 82, no. 14, pp. 6251-6258',
            doi: 'https://doi.org/10.1021/ac101163d'
        }
    ],
    posters: [
        {
            title: 'High-quality Approximation of Scientific Data using 3D Gaussian Splatting',
            year: '2024',
            authors: 'Andres Sewell, Landon Dyken, Victor A. Mateevitsi, Will Usher, Jefferson Amstutz, Thomas Marrinan, Khairi Reda, Silvio Rizzi, Joseph Insley, Michael E. Papka, Sidharth Kumar, Steve Petruzza',
            venue: 'In Proceedings of the 2024 IEEE 14th Symposium on Large Data Analysis and Visualization (LDAV \'24), 2024'
        },
        {
            title: 'Writing, Running, and Analyzing Large-scale Scientific Simulations with Jupyter Notebooks',
            year: '2021',
            authors: 'Pam Savira, Thomas Marrinan, and Michael E. Papka',
            venue: 'In Proceedings of the 2021 IEEE 11th Symposium on Large Data Analysis and Visualization (LDAV \'21), 2021, pp. 90-91',
            doi: 'https://doi.org/10.1109/LDAV53230.2021.00020'
        },
        {
            title: 'Real-Time Compression of Dynamically Generated Images for Offscreen Rendering',
            year: '2019',
            authors: 'Leah Emerson and Thomas Marrinan',
            venue: 'In Proceedings of the 2019 IEEE 9th Symposium on Large Data Analysis and Visualization (LDAV \'19), 2019, pp. 91-92',
            doi: 'https://doi.org/10.1109/LDAV48142.2019.8944381'
        },
        {
            title: 'Revolutionizing Hybrid Parallelization Through Data Communication Techniques',
            year: '2017',
            authors: 'Asare Nkansah, Tommy Franczak, Thomas Marrinan, and Michael E. Papka',
            venue: 'In Annual Biomedical Research Conference for Minority Students (ABRCMS)',
            link_text: 'Poster [PDF]',
            link_url: BASE_URL + 'pdfs/Nkansah%20et%20al.%20-%20Revolutionizing%20Hybrid%20Parallelization%20Through%20Data%20Communication%20Techniques.pdf'
        },
        {
            title: 'Networking Simulation Clusters with Visualization Clusters for Real-Time Data Analysis',
            year: '2016',
            authors: 'Thomas Marrinan, Joseph A. Insley, Silvio Rizzi, and Michael E. Papka',
            venue: 'In Argonne National Laboratory Postdoctoral Research and Career Symposium',
            link_text: 'Poster [PDF]',
            link_url: BASE_URL + 'pdfs/Marrinan%20et%20al.%20-%20Networking%20Simulation%20Clusters%20with%20Visualization%20Clusters%20for%20Real-Time%20Data%20Analysis.pdf'
        },
        {
            title: 'Future Outlooks for Enabling Interactive Supercomputing Frameworks',
            year: '2016',
            authors: 'Thomas Marrinan and Michael E. Papka',
            venue: 'In Greater Chicago Area Systems Research (GCASR)',
            link_text: 'Poster [PDF]',
            link_url: BASE_URL + 'pdfs/Marrinan%20et%20al.%20-%20Future%20Outlooks%20for%20Enabling%20Interactive%20Supercomputing%20Frameworks.pdf'
        },
        {
            title: 'Whole-Brain Vascular Reconstruction, Simulation, and Visualization',
            year: '2012',
            authors: 'Thomas Marrinan, Ian Gould, Chih-Yang Hsu, and Andreas Linninger',
            venue: 'In IEEE Scientific Visualization Conference (VisWeek)',
            link_text: 'Extended Abstract [PDF]',
            link_url: BASE_URL + 'pdfs/Marrinan%20et%20al.%20-%20Whole-Brain%20Vascular%20Reconstruction,%20Simulation,%20and%20Visualization.pdf',
            award: 'nomination'
        }
    ],
    thesis: [
        {
            title: 'Data-Intensive Remote Collaboration using Scalable Visualizations in Heterogeneous Display Spaces',
            year: '2016',
            authors: 'Thomas Marrinan',
            venue: 'PhD Thesis, University of Illinois at Chicago',
            doi: 'https://indigo.uic.edu/articles/thesis/10886204/1'
        }
    ],
    other: [
        {
            title: 'VisAnywhere: Developing Multi-platform Scientific Visualization Applications',
            year: '2023',
            authors: 'Thomas Marrinan, Victor A. Mateevitsi, Madeleine Moeller, Alina Kanayinkal, and Michael E. Papka',
            venue: 'SciVis Contest submission at IEEE Visualization Conference (VIS)',
            doi: 'https://doi.org/10.48550/arXiv.2404.17619',
            award: 'winner'
        },
        {
            title: 'Novel Display Technologies for Accelerating Scientific Discoveries',
            year: '2022',
            authors: 'V. Mateevitsi, N. Ferrier, J. Insley, J. Knowles, K. Ma, T. Marrinan, M. Papka, and S. Rizzi',
            venue: 'Position Paper at ASCR Workshop on Visualization for Scientific Discovery, Decision-Making, and Communication',
            link_text: 'Paper [PDF]',
            link_url: 'https://custom.cvent.com/DCBD4ADAAD004096B1E4AD96F3C8049E/files/event/fc8f3c090e35418982b417f2d3e4e73e/6deb9c26bc9c4b37938f0f394313c760.pdf'
        },
        {
            title: 'Exploring Visualization with Jupyter Notebooks',
            year: '2021',
            authors: 'Thomas Marrinan',
            venue: 'Invited Talk: Argonne Training Program on Extreme-Scale Computing (ATPESC)'
        },
        {
            title: 'Real-Time Omnidirectional Stereo Rendering: Generating 360° Surround-View Panoramic Images for Comfortable Immersive Viewing',
            year: '2021',
            authors: 'Thomas Marrinan',
            venue: 'Invited Talk: SIGGRAPH 2021'
        },
        {
            title: 'Web Browser Rendering and Interaction in Custom OpenGL Applications',
            year: '2019',
            authors: 'Trevor Tracy and Thomas Marrinan',
            venue: 'Student Paper in Midwest Instruction and Computing Symposium (MICS)',
            link_text: 'Proceedings',
            link_url: 'https://micsymposium.org/mics2019/online-proceedings/'
        },
        {
            title: 'Parallel Streaming for In Transit Analysis with Heterogeneous Data Layout',
            year: '2017',
            authors: 'Thomas Marrinan',
            venue: 'Lightning Talk at the In Situ Infrastructures for Enabling Extreme-scale Analysis and Visualization workshop'
        },
        {
            title: 'StickySchedule: An Interactive Multi-user Application for Conference Scheduling on Large-scale Shared Displays',
            year: '2017',
            venue: 'Demo session at Pervasive Displays',
            link_text: 'Demo [photo]',
            link_url: 'images/publications/sticky_schedule.jpg'
        },
        {
            title: 'Scalable Adaptive Graphics Environment (SAGE) for Global Collaboration',
            year: '2014',
            authors: 'Thomas Marrinan',
            venue: 'In Birds of a Feather Presentation at Supercomputing'
        },
        {
            title: 'SAGE2',
            year: '2014',
            authors: 'Thomas Marrinan',
            venue: 'In VISTech Workshop at Supercomputing'
        },
        {
            title: 'Whole-Brain Computational Fluid Dynamic Analysis',
            year: '2013',
            authors: 'Thomas Marrinan and Andreas Linninger',
            venue: 'In Food, Pharmaceutical and Bioengineering Division 2013 - Core Programming Area at the 2013 AIChE Annual Meeting: Global Challenges for Engineering a Sustainable Future (AIChE), 2013, pp. 706-708',
            link_text: 'Article [HTML]',
            link_url: 'https://www.aiche.org/conferences/aiche-annual-meeting/2013/proceeding/paper/636g-whole-brain-computational-fluid-dynamic-analysis-1'
        }
    ]
});
for (let key in publications) {
    for (let i = 0; i < publications[key].length; i++) {
        if (publications[key][i].hasOwnProperty('authors')) {
            publications[key][i].authors = publications[key][i].authors.replace(/Thomas Marrinan/, '<span class="tm-underline">Thomas Marrinan</span>').replace(/T. Marrinan/, '<span class="tm-underline">T. Marrinan</span>');
        }
        if (publications[key][i].hasOwnProperty('venue')) {
            publications[key][i].venue = publications[key][i].venue.replace(/(^In | in | at |: |PhD Thesis, )/, '$1<span class="tm-italic">').replace(/(, \d{4}| \(|$)/, "</span>$1");
        }
    }
}

function awardTypeToImageUrl(type) {
    if (type === 'winner') return BASE_URL + 'images/publications/best_paper.png';
    else if (type === 'nomination') return BASE_URL + 'images/publications/honorable_mention.png';
    return '';
}

function awardTypeToImageAlt(type) {
    if (type === 'winner') return 'best paper or winner icon';
    else if (type === 'nomination') return 'honorable mention or nomination icon';
    return '';
}
</script>

<template>
    <Navigation></Navigation>
    <div id="tm-publications" class="grid-container">
        <div class="grid-x grid-padding-x" v-for="type in publication_types">
            <div class="small-12 cell">
                <h2>{{ type.text }} ({{ publications[type.key].length }})</h2>
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                        <div class="small-12 cell">
                            <div class="card" v-for="item in publications[type.key]">
                                <div class="card-divider">
                                    <h3><span class="tm-bold" v-html="item.title"></span><br/>({{ item.year }})</h3>
                                    <div class="tm-award-container" v-if="item.hasOwnProperty('award')">
                                        <img class="tm-award" :src="awardTypeToImageUrl(item.award)" :alt="awardTypeToImageAlt(item.award)" />
                                    </div>
                                </div>
                                <div class="card-section">
                                    <p v-html="item.authors"></p>
                                    <p v-html="item.venue"></p>
                                    <p v-if="item.hasOwnProperty('doi')"><a :href="item.doi" target="_blank">{{ item.doi }}</a></p>
                                    <p v-if="item.hasOwnProperty('link_text') && item.hasOwnProperty('link_url')"><a :href="item.link_url" target="_blank">{{ item.link_text }}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="small-12 cell">
                <hr />
            </div>
        </div>
        <div class="grid-x grid-padding-x">
            <div class="small-12 cell">
                <p><img class="tm-pub-award" :src="BASE_URL + 'images/publications/best_paper.png'" alt="best paper or winner icon" /> = Best Paper / Winner</p>
                <p><img class="tm-pub-award" :src="BASE_URL + 'images/publications/honorable_mention.png'" alt="honorable mention or nomination icon" /> = Honorable Mention / Nomination</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#tm-publications {
    margin-top: 1rem;
}

.tm-award-container {
    display: flex;
    flex-grow: 100;
    min-width: 3rem;
}

.tm-award {
    margin: 0 0 0 auto;
    width: 2rem;
    height: 1.875rem;
}

.tm-pub-award {
    width: 1.2rem;
    height: 1.125rem;
}
</style>
