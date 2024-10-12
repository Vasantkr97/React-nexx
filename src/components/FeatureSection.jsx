import { div } from "framer-motion/client";
import { features } from "../data/features.js";
import TagLine from "./TagLine.jsx";

const FeaturesSection = () => {
    return (
        <section id="features" className="flex items-center p-10 justify-center flex-col">
            <TagLine>Features</TagLine>
            <h2 className="font-extrabold text-center text-3xl mb-4 md:mb-8">Intelligent Form Building</h2>
            <div className="mt-10 grid items-center grid-cols-1
                gap-3 md:grid-cols-3 max-w-screen-xl">
                {
                    features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-indigo-400/30 
                            rounded-lg shadow-lg p-6 h-full flex items-center space-x-4"
                            >
                                <div>
                                    <h3 className="font-bold text-xl">{feature.title}</h3>
                                    <p className="text-gray-500">{feature.description}</p>
                                </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FeaturesSection;