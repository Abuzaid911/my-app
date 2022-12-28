import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function Blog() {
    //Dark Mode configurations:

    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]
    );

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const [content, setContent] = useState(''); // store the content in the component's state
    const [posts, setPosts] = useState([]); // store the posts in the component's state
    const [errorMessage, setErrorMessage] = useState(''); // store the error message in the component's state

    function handleChange(event) {
        setContent(event.target.value); // update the content in the component's state when the input field changes
    }

    function handleSubmit(event) {
        event.preventDefault(); // prevent the form from refreshing the page
        if (content.trim() === '') {
            // don't allow empty posts
            alert('Please write something before posting');
            return;
        }
        setPosts([...posts, content]); // add the new post to the posts array in the component's state
        setContent(''); // reset the content in the component's state
    }

    function handleDelete(index) {
        setPosts(posts.filter((_, i) => i !== index)); // remove the post at the specified index from the posts array in the component's state
    }

    return (
        <div class="dark:bg-gray-900 dark:text-gray-100 swap swap-rotate">
            <button className=' dark:text-gray-100 rounded-2xl dark:bg-black' onClick={handleThemeSwitch}>
                ☾
            </button>
            <div class="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div class="flex items-center justify-between">
                    <span class="text-sm dark:text-gray-400 ">Dec 27, 2022</span>
                </div>
                <div class="mt-3">
                    <a class="text-2xl font-bold mt-3">Day to night coding</a>
                    <p class="mt-2 font-mono justify-between mt-6"> Today was a productive day as I spent the entire day coding my assignment “tbh just 2-3 hours ig”.
                        I started my day early and sat down with laptop on my legs and cigs on my mouth to get started. I began by reviewing the requirements for my assignments and making a plan for how I would tackle each one, but I decided to do this blog instead lmao.
                        When I felt that time is running I called my friend Mazooni and we started to get this shit done!
                        I found myself getting more and more engrossed in this “Ass”ignment. The time seemed to fly by as I coded this shit.
                        Despite the challenges that I faced along the way, I was able to push through and complete this fuckin assignment by the end of the day. It was a great feeling to have accomplished so much in a single day.
                        Overall, it was a fulfilling and productive day as I spent the entire day coding and working on my assignment. Now I feel sleepy but I wanna do something fun so I ended up here..
                    </p>
                </div>
                <div class="flex items-center justify-between mt-14">
                    <div>
                        <a href="https://twitter.com/ahmedwallahi" class="flex items-center">
                            <img src="https://pbs.twimg.com/profile_images/1598904984686526464/gixFCMC4_400x400.jpg" alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span class="font-thin  dark:text-violet-200" style={{ textShadow: "0px 7px 10px #ba00ff" }}>Ahmed Abuzaid</span>
                        </a>
                    </div>
                </div>


            <a class="text-2xl font-bold mt-3 ">Day to night coding</a>
            <p class="mt-2 font-mono justify-between mt-6"> Today was a productive day as I spent the entire day coding my assignment “tbh just 2-3 hours ig”.
                I started my day early and sat down with my laptop on my legs and my hand holding cigs to get started. I began by reviewing the requirements for my assignments and making a plan for how I would tackle each one, but I decided to do this blog instead lmao.
                When I felt that time is running I called my friend Mazooni and we started to get this shit done!
                I found myself getting more and more engrossed in this “Ass”ignment. The time seemed to fly by as I coded this shit.
                Despite the challenges that I faced along the way, I was able to push through and complete this fuckin assignment by the end of the day. It was a great feeling to have accomplished so much in a single day.
                Overall, it was a fulfilling and productive day as I spent the entire day coding and working on my assignment. Now I feel sleepy but I wanna do something fun so I ended up here..
            </p>

            <div>
                <a href="https://twitter.com/ahmedwallahi" class="flex items-center">
                    <img src="https://pbs.twimg.com/profile_images/1598904984686526464/gixFCMC4_400x400.jpg" alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                    <span class="font-thin dark:text-violet-200" style={{ textShadow: "0px 7px 10px #ba00ff" }}>Ahmed Abuzaid</span>
                </a>


                {posts.map((post, index) => (
                    <div key={index}>
                        {post}
                        <button class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </div>

            <div class="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 mt-40">
                <div class="flex items-center justify-between"></div>

                <div class="flex flex-col max-w-xl items-center p-8 border-solid border-2 border-purple-800 rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100 margin ml-24 shadow-md">

                    <h2 class="text-3xl font-semibold text-center">Talk about your day</h2>

                    <form class="flex flex-col" onSubmit={handleSubmit}>
                        <textarea value={content} onChange={handleChange}
                            rows="3" placeholder="How was your day?" class="border-solid border-2 border-purple-800  p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                        <button class=" btn mx-10 my-6 ml-6 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400" type="submit">Post</button>
                        <button rel="/" href="/" class=" btn text-sm dark:text-gray-400 ">Maybe later</button>
                    </form>

                </div>
            </div>
            </div>
</div>
    );
};

export default Blog;