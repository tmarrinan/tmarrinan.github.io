<script setup>
import { ref } from 'vue';
import Navigation from './Navigation.vue';

const BASE_URL = import.meta.env.BASE_URL || '/';

let research = ref([
    {
        title: 'Interactive Virtual Reality Exploration of Large-Scale Datasets',
        dates: '2020-Present',
        image: 'images/research/research_vr.jpg',
        description: [
            'This research focuses on image-based rendering techniques to visualize datasets in virtual reality that are otherwise too large to interactively render at high frame rates. Collections of stereoscopic 360&deg; images are used to create interactive and immersive experiences that can be viewed using virtual reality headsets.'
        ]
    },
    {
        title: 'Interactive Supercomputing / Computational Steering',
        dates: '2015-Present',
        image: 'images/research/research_sc.jpg',
        description: [
            'This research at Argonne National Laboratory focuses on executing analytic tasks at the same time as large-scale simulations are running on leadership computing resources. This work will enable researchers to view intermediate results and make real-time decisions, which can lead to a shortened time-to-discovery.'
        ]
    },
    {
        title: 'Remote Visualization of Large-Scale Data',
        dates: '2018-2020',
        image: 'images/research/research_remotevis.jpg',
        description: [
            'In order to harness the power of distributed rendering and the real-time nature of local rendering, this research focuses on developing a streaming framework to transfer dynamically rendered images from high-performance graphics clusters to remote machines in real-time.',
            'Local display systems can range from a standard computer with single monitor to a cluster-driven tiled display wall. Additionally, multiple concurrent endpoints can receive a visualization to allow collaborators at different physical locations to simultaneously view the image stream.'
        ]
    },
    {
        title: 'SAGE2&trade; Collaborative Multi-user Operating Environment',
        dates: '2013-2015',
        image: 'images/research/research_sage2.jpg',
        description: [
            'This research focuses on the next generation of scalable high-resolution collaboration spaces. SAGE2 is a multi-user operating environment that enhances co-located and remote collaboration by leveraging large-scale shared displays. The framework provides a ubiquitous computing platform to enable real-time data-conferencing using a Scalable Resolution Shared Display and networked personal devices, which are used for simultaneous multi-user interaction and document sharing. The shared display acts as a seamless ultra high-resolution windowing environment for documents and applications.'
        ]
    },
    {
        title: 'Visualization of the Human Cerebral Vascular System',
        dates: '2011-2013',
        image: 'images/research/research_bio.jpg',
        description: [
            'In this collaboration biongineers and neurosurgeons, graphical stereoscopic visual applications were developed for a standard single monitor as well as an ultra-high resolution multi-paneled platform. The visualization focused on viewing 4D (space and time) medical images from angiography, MRI, CT, and blood flow simulations for individual patients. These visualization tools have enhanced insight about the pathology of patients suffering from neurovascular disease, especially stroke. Improved preparation for surgical intervention is expected to empower surgeons to choose better medical treatment paths.'
        ]
    },
    {
        title: 'Multivariate Visualization of Chromatography for Chemical Analysis',
        dates: '2009-2010',
        image: 'images/research/research_chem.jpg',
        description: [
            'Three-dimensional data visualization was used to plot chromatography systems. This research led to more efficient identification of systems used for modifying the selectivity of the separation in complex chemical mixtures. This research soon evolved to require higher dimensional analysis. The research team used parallel coordinates and 3D glyph representation to enhance their prior work.'
        ]
    },
    {
        title: 'Volumetric Visualization of Seyfert Galaxies',
        dates: '2009',
        image: 'images/research/research_astro.jpg',
        description: [
            'Volumetric visualization of data from the Hubble Space Telescope was used to help astronomers understand the kinematics of ionized gas in the nuclear regions of Seyfert galaxies, the most common active galactic nuclei. The goal was to compare spectroscopic-analysis results with the expectations from various gas flow models to determine the dominant acceleration mechanism. This research was done as part of DUSCI, the Drake Undergraduate Science Collaborative Institute.'
        ]
    }
]);

</script>

<template>
    <Navigation></Navigation>
    <div id="tm-research-proj" class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="small-12 medium-6 cell" v-for="project in research">
                <div class="card">
                    <div class="card-divider">
                        <h3><span class="tm-bold" v-html="project.title"></span><br/>({{ project.dates }})</h3>
                    </div>
                    <img class="tm-research-img" :src="BASE_URL + project.image" alt="figure of research project" />
                    <div class="card-section">
                        <p v-for="paragraph in project.description" v-html="paragraph"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#tm-research-proj {
    margin-top: 1rem;
}

.tm-research-img {
    max-height: 13rem;
    width: auto;
}
</style>
