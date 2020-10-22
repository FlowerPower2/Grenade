const MultipleImages = {
    background: {
        color: {
            value: "#211f2c",
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1,
    },
    backgroundMask: {
        cover: {
            color: {
                value: "#fff",
            },
            opacity: 1,
        },
        enable: false,
    },
    detectRetina: true,
    fpsLimit: 60,
    infection: {
        cure: false,
        delay: 0,
        enable: false,
        infections: 0,
        stages: [],
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onDiv: {
                ids: "repulse-div",
                enable: false,
                mode: "repulse",
                type: "circle",
            },
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                },
            },
            resize: true,
        },
        modes: {
            attract: {
                distance: 200,
                duration: 0.4,
                speed: 1,
            },
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            connect: {
                distance: 80,
                links: {
                    opacity: 0.5,
                },
                radius: 60,
            },
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
                speed: 1,
            },
            slow: {
                factor: 3,
                radius: 200,
            },
            trail: {
                delay: 1,
                quantity: 1,
            },
        },
    },
    particles: {
        collisions: {
            enable: false,
            mode: "bounce",
        },
        color: {
            value: "#ffffff",
            animation: {
                enable: false,
                speed: 1,
                sync: true,
            },
        },
        links: {
            blink: false,
            color: {
                value: "#000",
            },
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.4,
            shadow: {
                blur: 5,
                color: {
                    value: "#00ff00",
                },
                enable: false,
            },
            triangles: {
                enable: false,
            },
            width: 1,
            warp: false,
        },
        move: {
            angle: 90,
            attract: {
                enable: false,
                rotate: {
                    x: 600,
                    y: 1200,
                },
            },
            direction: "none",
            enable: true,
            noise: {
                delay: {
                    random: {
                        enable: false,
                        minimumValue: 0,
                    },
                    value: 0,
                },
                enable: false,
            },
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
            trail: {
                enable: false,
                length: 10,
                fillColor: {
                    value: "#000000",
                },
            },
            vibrate: false,
            warp: false,
        },
        number: {
            density: {
                enable: true,
                area: 80,
                factor: 100,
            },
            limit: 0,
            value: 80,
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
            },
            random: {
                enable: true,
                minimumValue: 1,
            },
            value: 1,
        },
        rotate: {
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            },
            direction: "random",
            path: false,
            random: true,
            value: 0,
        },
        shadow: {
            blur: 0,
            color: {
                value: "#000000",
            },
            enable: false,
            offset: {
                x: 0,
                y: 0,
            },
        },
        shape: {
            options: {
                character: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400",
                },
                char: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400",
                },
                polygon: {
                    sides: 5,
                },
                star: {
                    sides: 5,
                },
                image: [
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/apple.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/avocado.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/banana.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/berries.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/cherry.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/grapes.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/lemon.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/orange.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/peach.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/pear.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/pepper.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/plum.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/star.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/strawberry.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/watermelon.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/watermelon_slice.png",
                        width: 32,
                        height: 32,
                    },
                ],
                images: [
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/apple.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/avocado.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/banana.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/berries.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/cherry.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/grapes.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/lemon.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/orange.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/peach.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/pear.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/pepper.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/plum.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/star.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/strawberry.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/watermelon.png",
                        width: 32,
                        height: 32,
                    },
                    {
                        src:
                            "https://cdn.matteobruni.it/images/particles/fruits/watermelon_slice.png",
                        width: 32,
                        height: 32,
                    },
                ],
            },
            type: "image",
        },
        size: {
            animation: {
                destroy: "none",
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                startValue: "max",
                sync: false,
            },
            random: {
                enable: false,
                minimumValue: 1,
            },
            value: 16,
        },
        stroke: {
            width: 0,
            color: {
                value: "#000000",
                animation: {
                    enable: false,
                    speed: 1,
                    sync: true,
                },
            },
        },
        twinkle: {
            lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
            },
            particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
            },
        },
    },
    pauseOnBlur: true,
};

export default MultipleImages;
