import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
// import { Card, CardContent } from "@/Components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel"
import { Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            id: 1,
            avatar: "/Avatar.png",
            name: "John Doe",
            feedback: "Umair is an exceptional developer who delivered beyond our expectations.",
            rating: 5
        },
        {
            id: 2,
            name: "Jane Smith",
            avatar: "/Avatar.png",
            feedback: "A pleasure to work with, highly recommend Umair for any project.",
            rating: 5
        },
        {
            id: 3,
            name: "Alice Johnson",
            avatar: "/Avatar.png",
            feedback: "Umair's attention to detail and expertise made a significant impact on our project.",
            rating: 5
        },
    ];
    return (
        <>
            <section className="testimonial m-auto font-montserrat my-10 flex flex-col justify-start items-center relative p-6">
                <h2 className="text-center dark:text-white md:text-5xl text-4xl font-extrabold">Testimonials</h2>
                <span className="mt-3 md:text-2xl text-xl text-center font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                    What People Say
                </span>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="lg:w-[60vw] w-screen p-10"
                >
                    <CarouselContent className="p-5 -ml-2">
                        {testimonials.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className="md:basis-2/3 basis-full px-2"
                            >
                                <div className="border h-64  flex flex-col justify-evenly items-start border-white rounded-md bg-[#3232322e] backdrop-blur-md p-5">
                                    <div className="flex items-center gap-3">
                                        <img className="rounded-full size-10" src={testimonial.avatar} alt={testimonial.name} />
                                        <span className="text-sm font-semibold">{testimonial.name}</span>
                                    </div>
                                    <div className="rating">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} className="inline text-yellow-500" />
                                        ))}
                                    </div>
                                    <p className="font-inter">{testimonial.feedback}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </section>

        </>
    )
}
