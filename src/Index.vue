<script setup>
import { ref } from 'vue';
import Navigation from './Navigation.vue';

const BASE_URL = import.meta.env.BASE_URL || '/';

let latest = ref([
    {
        date: 'June 12-14, 2024',
        text: 'Paper titled "Image Synthesis from a Collection of Depth Enhanced Panoramas: Creating Interactive Extended Reality Experiences from Static Images" was presented at %%ACM IMX%% (Interactive Media Experiences) 2024.',
        link: 'https://imx.acm.org/2024/',
        image: 'https://imx.acm.org/2024/wp-content/uploads/2021/09/cropped-Logo_IMX_L1-e1696877967641.jpg'
    },
    {
        date: 'May 11, 2024',
        text: 'Paper titled "Leveraging AI to Generate Audio for User-generated Content in Video Games" was presented at %%GenAICHI%% (Generative AI and HCI workshop) held in conjunction with ACM CHI 2024.',
        link: 'https://generativeaiandhci.github.io/',
        image: 'https://generativeaiandhci.github.io/images/2023-firefly.jpg'
    },
    {
        date: 'October 23, 2023',
        text: 'IEEE %%SciVis Contest%% submission "VisAnywhere: Developing Multi-platform Scientific Visualization Applications" was awarded 1st Place at IEEE VIS (Visualization Conference) 2023.',
        link: 'https://sciviscontest2023.github.io/',
        image: 'https://sciviscontest2023.github.io/brainAnim.webp'
    },
    {
        date: 'October 3-5, 2022',
        text: 'Paper titled "Interactive Virtual Reality Exploration of Large-scale Datasets using Omnidirectional Stereo Images" was presented at %%ISVC%% (International Symposium on Visual Computing) 2022.',
        link: 'https://www.isvc.net/',
        image: 'https://www.isvc.net/wp-content/uploads/2022/03/logo1.png'
    },
    {
        date: 'October 25th, 2021',
        text: 'Paper titled "GPU-based Image Compression for Efficient Compositing in Distributed Rendering Applications" was presented at %%LDAV%% (Big Data Analysis and Visualization) held in conjunction with IEEE Vis 2021.',
        link: 'https://ldav.io/2021/',
        image: 'https://ldav.io/2021/assets/ldav21_logo.png'
    }
]);

latest.value.forEach((item) => {
    if (item.hasOwnProperty('link')) {
        item.html = '<span class="tm-underline">' + item.date + '</span>: ' + item.text.replace(/%%(.+)%%/, '<a href="' + item.link + '" target="_blank">$1</a>');
    }
    else {
        item.html = '<span class="tm-underline">' + item.date + '</span>: ' + item.text;
    }
});
</script>

<template>
    <Navigation></Navigation>
    <div class="grid-container">
        <!-- About me -->
        <div id="tm-about" class="grid-x grid-padding-x">
            <div class="small-3 hide-for-medium"></div>
            <div class="small-6 medium-4 large-2 cell">
                <img :src="BASE_URL + 'images/home/cover_photo_2023.jpg'" alt="Headshot of Tommy Marrinan" />
            </div>
            <div class="small-3 hide-for-medium"></div>
            <div class="small-12 medium-8 large-10 cell">
                <h2>About</h2>
                <p>As an Associate Professor in Computer and Information Sciences at the <a href="https://www.stthomas.edu/">University of St. Thomas</a>
                   and a Computer Scientist at <a href="https://www.anl.gov/">Argonne National Laboratory</a>, my research interests include
                   visualization, virtual reality, and artificial intelligence in conjunction with high performance computing. I focus on designing and
                   enhancing frameworks to better enable scientific analysis of large-scale data.</p>
                <p>Current research surrounds teachniques for real-time virtual reality exploration of large-scale data sets and concurrent execution of
                   large-scale simulations and visualizations for in-situ analysis and computational steering. Prior research, for my dissertation
                   conducted in the <a href="https://www.evl.uic.edu/">Electronic Visualization Laboratory</a> at the
                   <a href="https://www.uic.edu/">University of Illinois at Chicago</a>, focused on developing and evaluating data synchronization
                   schemes for mixed presence collaboration using large-scale displays.</p>
            </div>
        </div>
        <!-- Latest -->
        <div id="tm-latest" class="grid-x grid-padding-x">
            <div class="small-12 cell">
                <h2>Latest</h2>
                <div id="tm-news-items" class="grid-x grid-padding-x" v-for="item in latest">
                    <div class="small-4 medium-3 large-2 cell">
                        <img :src="item.image" alt="latest news item cover image" />
                    </div>
                    <div class="small-8 medium-9 large-10 cell">
                        <p v-html="item.html"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#tm-about {
    margin-top: 1rem;
}

#tm-latest {
    margin-top: 1.5rem;
}

#tm-news-items {
    border: solid 0.5rem #D8D8D8;
    margin: 0;
    max-width: calc(1200px - 1rem);
}

#tm-news-items:nth-child(even) {
    background-color: #FFFFFF;
    padding: 1rem 0;
}

#tm-news-items:nth-child(odd) {
    background-color: #D8D8D8;
    padding: 1rem 0;
}

#tm-news-items:last-child {
    margin-bottom: 1rem;
}
</style>