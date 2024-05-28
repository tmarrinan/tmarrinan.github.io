<script setup>
import { ref } from 'vue';
const BASE_URL = import.meta.env.BASE_URL || '/';

let job_title = ref('Associate Professor');
let email = ref('tmarrinan@stthomas.edu');
</script>

<template>
    <div id="tm-top-bar">
        <div id="tm-mobile-top-bar" class="hide-for-large">
            <div id="tm-menu" data-toggle="tm-mobile-menu">
                <img class="tm-menu-icon" :src="BASE_URL + 'images/menu.png'" alt="menu open icon" />
            </div>
            <div id="tm-info">
                <p class="tm-info-text"><span class="tm-bold">Tommy Marrinan, PhD</span> | {{ email }}</p>
                <p class="tm-info-text">{{ job_title }} &ndash; Computer Science</p>
            </div>
        </div>
        <div id="tm-desktop-top-bar" class="show-for-large">
            <div id="tm-info">
                <p class="tm-info-text"><span class="tm-bold">Tommy Marrinan, PhD</span> | {{ email }}</p>
                <p class="tm-info-text">{{ job_title }} &ndash; Computer Science</p>
            </div>
            <div id="tm-navlinks">
                <ul class="horizontal menu">
                    <li><a :href="BASE_URL + 'index.html'" class="tm-nav-link">Home</a></li>
                    <li><a :href="BASE_URL + 'teaching.html'" class="tm-nav-link">Teaching</a></li>
                    <li><a :href="BASE_URL + 'research.html'" class="tm-nav-link">Research</a></li>
                    <li><a :href="BASE_URL + 'publications.html'" class="tm-nav-link">Publications</a></li>
                    <li><a :href="BASE_URL + 'awards_press.html'" class="tm-nav-link">Awards/Press</a></li>
                    <li><a :href="BASE_URL + 'cv.html'" class="tm-nav-link">CV</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div id="nav-spacer"></div>

    <div class="off-canvas-wrapper hide-for-large">
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
    text-align: left;
}

#tm-mobile-top-bar {
    overflow: hidden;
    position: static;
}

#tm-mobile-menu{
    background-color: #F2F2F2;
}

#nav-spacer {
    width: 100%;
    height: 3.5rem;
}

#tm-info {
    position: absolute;
    display: block;
    left: 3rem;
    margin: 0.5rem 0 0 1.25rem;
    height: 2.5rem;
    white-space: nowrap;
}

#tm-menu {
    position: absolute;
    display: block;
    left: 0rem;
    box-sizing: content-box;
    width: 2.5rem;
    padding: 0.25rem 0;
    margin: 0.375rem 0 0 0.5rem;
    border: 0.125rem solid #D1C9D9;
    border-radius: 0.5rem;
    text-align: center;
    cursor: pointer;
}

#tm-navlinks{
    position: absolute;
    display: block;
    left: 27.5rem;
    top: 0.625rem;
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
    font-size: 0.825rem;
    color: #D1C9D9;
    margin-bottom: 0;
    line-height: 1.5;
}

.tm-bold {
    font-weight: bold;
}

.tm-nav-link, .tm-nav-link:visited {
    font-size: 1rem;
    font-style: normal;
    color: #FFFFFF;
}

.tm-nav-link:hover {
    text-decoration: underline;
    color: #FFFFFF;
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
