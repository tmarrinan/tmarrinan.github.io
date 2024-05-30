<script setup>
import { ref } from 'vue';
import Navigation from './Navigation.vue';

const BASE_URL = import.meta.env.BASE_URL || '/';

let schools = ref([
    {
        name: 'Univeristy of St. Thomas',
        url: 'https://www.stthomas.edu/',
        courses: [
            {
                title: 'Introduction to Programming and Problem Solving',
                department: 'CISC',
                number: 131,
                description: 'This course is designed for both Computer Science majors and non-majors. It introduces logical thinking, the use of common programming structures, and the design and implementation of algorithms. In addition, basic computer concepts are covered, including representation of information in the machine. The typical student will be adept at using the computer but will have no prior programming experience.'
            },
            {
                title: 'Operating Systems',
                department: 'CISC',
                number: 310,
                description: 'This course covers the principles of designing and building operating systems. Topics include sequential versus concurrent processes, synchronization and mutual exclusion, CPU scheduling, memory management techniques, input/output device handling, file systems design, and security and protection.'
            },
            {
                title: 'Web Development',
                department: 'CISC',
                number: 375,
                description: 'This course examines both front-end and back-end development for applications accessible on the World Wide Web. Students will learn practical techniques for designing and implementing web applications, including static and dynamic web pages, server-side vs. client-side rendering, and CSS and JavaScript frameworks.'
            },
            {
                title: 'Computer Graphics',
                department: 'CISC',
                number: 420,
                description: 'This course introduces the principles of interactive computer graphics. Computer graphics serves as the foundation for many areas, such as computer animation, video game design, and data visualization. Topics covered in this course include raster vs. vector techniques, 2-dimensional and 3-dimensional rendering, and shading and illumination models.'
            }
        ]
    },
    {
        name: 'Argonne National Laboratory',
        url: 'https://www.anl.gov/',
        courses: [
            {
                title: 'Coding for Science Camp',
                description: 'In this free, five-day enrichment experience, high school students learn Python, connect with Argonne computer scientists, and program a robot via a Raspberry Pi. Students will learn computer science skills and find ways to apply them to key science problems, opening up new opportunities on the path toward STEM-related careers.'
            }
        ]
    }
]);

</script>

<template>
    <Navigation></Navigation>
    <div class="grid-container">
        <div class="grid-x grid-padding-x tm-school" v-for="school in schools">
            <div class="small-12 cell">
                <h3><a :href="school.url" target="_blank">{{ school.name }}</a></h3>
            </div>
            <div class="small-12 cell">
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                        <div class="small-12 medium-6 cell" v-for="course in school.courses">
                            <div class="card">
                                <div class="card-divider">
                                    <h3>{{ course.title }}<span v-if="course.hasOwnProperty('department') && course.hasOwnProperty('number')"> | {{ course.department }} {{ course.number }}</span></h3>
                                </div>
                                <div class="card-section">
                                    <p>{{ course.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.tm-school {
    margin-top: 1rem;
}
</style>
