import TagLine from "./TagLine"

const Testimonials = () => {
  return (
    <section className="flex items-center justify-center flex-col mt-20 p-6">
        <TagLine>Testimonials</TagLine>
        <h2 className="text-4xl font-bold text-center mt-3 mb-8">
            What builders say about us
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
            <div className="grid gap-4">
                <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
                    <div className="flex space-x-3 mb-4">
                        <img src="/testimonials/1.png" alt="User Image" className="w-12 h-12 rounded-full"/>
                        <p>user</p>
                    </div>
                    <p className="text-sm space-y-4">
                        <span>
                            The AI form Builder has revolutionized the way white
                            collect data. Its incredibly
                            intuitive and has saved us countless hours of
                            manual work. The dynamic form
                            adjustments are a game-changer.
                        </span>
                    </p>
                </div>
            </div>
            <div className="grid gap-4">
            <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
                    <div className="flex space-x-3 mb-4">
                        <img src="/testimonials/2.png" alt="User Image" className="w-12 h-12 rounded-full"/>
                        <p>user</p>
                    </div>
                    <p className="text-sm space-y-4">
                        <span>
                            I love the seamless integration and the 
                            advanced customization options. its
                            perfect for our growing business needs.
                        </span>
                    </p>
                </div>
            </div>
            <div className="grid gap-4">
            <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
                    <div className="flex space-x-3 mb-4">
                        <img src="/testimonials/3.png" alt="User Image" className="w-12 h-12 rounded-full"/>
                        <p>user</p>
                    </div>
                    <p className="text-sm space-y-4">
                        <span>
                            The security features give me peace of
                            mind knowing our data is protected. Plus,
                            this support team is always there when 
                            we need them.
                        </span>
                    </p>
                </div>
            </div>
            <div className="grid gap-4">
            <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
                    <div className="flex space-x-3 mb-4">
                        <img src="/testimonials/4.png" alt="User Image" className="w-12 h-12 rounded-full"/>
                        <p>user</p>
                    </div>
                    <p className="text-sm space-y-4">
                        <span>
                            The Analytics and reporting tools provide
                            us with valuable insights. We're able to
                            make data-driven decisions with ease.
                        </span>
                    </p>
                </div>
            </div>
            <div className="grid gap-4">
            <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
                    <div className="flex space-x-3 mb-4">
                        <img src="/testimonials/5.png" alt="User Image" className="w-12 h-12 rounded-full"/>
                        <p>user</p>
                    </div>
                    <p className="text-sm space-y-4">
                        <span>
                            The security features give me peace of 
                            mind knowing our data is protected. Plus,
                            the support team is always there when
                            we need them.
                        </span>
                    </p>
                </div>
            </div>
            <div className="grid gap-4">
                Scaling our form capabilities as our
                business grows has never been easier.
                The AI form Builder handles high volumes effortlessly.
            </div>
        </div>
    </section>
  )
}

export default Testimonials;
