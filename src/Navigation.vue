<script setup>
import { ref } from 'vue';
const BASE_URL = import.meta.env.BASE_URL || '/';

let job_title = ref('Associate Professor');
let department = ref('Computer and Information Sciences');
let employer = ref('University of St. Thomas');
let email = ref('tmarrinan@stthomas.edu');
</script>

<template>
    <div id="tm-top-bar">
        <div class="tm-menu" data-toggle="tm-mobile-menu">
            <img class="tm-menu-icon" :src="BASE_URL + 'images/menu.png'" alt="menu open icon" />
        </div>
        <div id="tm-info">
            <p class="tm-info-text"><span class="tm-bold">Tommy Marrinan, PhD</span> | {{ employer }} | {{ email }}</p>
            <p class="tm-info-text">{{ job_title }} &ndash; {{ department }}</p>
        </div>
    </div>
    <div id="nav-spacer"></div>

    <div class="off-canvas-wrapper">
        <div class="off-canvas position-left" id="tm-mobile-menu" data-transition="overlap" data-off-canvas>
            <div class="tm-menu-heading">
                <p class="tm-menu-heading-text">Navigation</p>
                <div class="tm-menu-close" data-close="tm-mobile-menu">
                    <img class="tm-menu-icon-close" :src="BASE_URL + 'images/close.png'" alt="menu close icon" />
                </div>
            </div>
            <ul class="vertical menu">
                <li><a :href="BASE_URL + 'index.html'" class="tm-menu-link">Home</a></li>
                <li><a :href="BASE_URL + 'teaching.html'" class="tm-menu-link">Teaching</a></li>
                <li><a :href="BASE_URL + 'research.html'" class="tm-menu-link">Research</a></li>
                <li><a :href="BASE_URL + 'publications.html'" class="tm-menu-link">Publications</a></li>
                <li><a :href="BASE_URL + 'awards_press.html'" class="tm-menu-link">Awards/Press</a></li>
                <li><a :href="BASE_URL + 'cv.html'" class="tm-menu-link">CV</a></li>
            </ul>
        </div>
        <!--<div class="off-canvas-content" data-off-canvas-content></div>-->
    </div>
</template>

<style>
#tm-top-bar {
    position: fixed;
    width: 100%;
    height: 3.5rem;
    background-color: #472568;
    text-align: center;
}

#tm-mobile-menu{
    background-color: #F2F2F2;
}

#nav-spacer {
    width: 100%;
    height: 3.5rem;
}

#tm-info {
    float: left;
    text-align: left;
    margin: 0.5rem 0 0 1.25rem;
    width: 35.5rem;
    height: 2.5rem;
}

.tm-menu {
    float: left;
    display: block;
    box-sizing: content-box;
    width: 2.5rem;
    padding: 0.25rem 0;
    margin: .375rem 0 0 1.25rem;
    border: 0.125rem solid #D1C9D9;
    border-radius: 0.5rem;
    cursor: pointer;
}

.tm-menu-icon {
    width: 2rem;
    height: 2rem;
}

.tm-menu-heading {
    width: 100%;
    height: 3.5rem;
    padding: 0;
    background-color: #472568;
}

.tm-menu-heading-text {
    float: left;
    font-size: 1.25rem;
    color: #D1C9D9;
    float: left;
    margin: 0.75rem 0 0 1rem;
}

.tm-menu-close {
    float: right;
    display: block;
    box-sizing: content-box;
    padding: 0.125rem 0.25rem 0.25rem 0.25rem;
    margin: .625rem 0.5rem 0 0;
    border: 0.125rem solid #D1C9D9;
    border-radius: 0.5rem;
    cursor: pointer;
}

.tm-menu-icon-close {
    width: 1.25rem;
    height: 1.25rem;
}

.tm-info-text {
    font-size: 0.875rem;
    color: #D1C9D9;
    margin-bottom: 0;
    line-height: 1.5;
}

.tm-bold {
    font-weight: bold;
}

.tm-menu-link, .tm-menu-link:visited {
    font-size: 1rem;
    font-style: normal;
    color: #464646;
}

.tm-menu-link:hover {
    text-decoration: underline;
    color: #464646;
    background-color: #DCDCDC;
}
</style>
