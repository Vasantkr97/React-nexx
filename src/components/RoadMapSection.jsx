import { section } from "framer-motion/client";
import MileStone from "./MileStone"

const roadMap = [
    {
        id: 1,
        name: "Project KickOff",
        description: "kick-Off meeting and requirements gathering",
    },
    {
        id: 2,
        name: "Design",
        description: "Design and Prototyping",
    },
    {
        id: 3,
        name: "Development",
        description: "Development and testing",
    },
    {
        id: 4,
        name: "Deployment",
        description: "Deployment anf final testing",
    },
    {
        id: 5,
        name: "Maintenance",
        description: "Matainance and Supporting",
    },
];

const RoadMapSection = () => {
  return (
    <section id="roadmap" className="max-w-80 mx-auto">
        <h1 className="font-bold text-4xl text-center mb-12">Roadmap</h1>
        {
            roadMap.map((roadMapItem, index) => (
                <MileStone 
                    key={index}
                    title={roadMapItem.name}
                    description={roadMapItem.description}
                    lastItem={index === roadMap.length-1}
                />
            ))
        }
    </section>
  )
}

export default RoadMapSection
