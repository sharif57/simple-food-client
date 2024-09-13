import Works from "./Works";

const How = () => {
    return <div className=" px-9 mt-12">
        <div className="flex justify-between items-center gap-12">
            <div className="space-y-4">
                <h1 className="text-5xl font-bold">How it Works</h1>
                <p className="">Your food should match your effort. Our tasty meal plans and tailored macros support your fitness and weight goals.</p>

                <div className="mt-14  space-y-4">
                    <div tabIndex={0} className="collapse collapse-arrow border-2  border-base-300 ">
                        <div className="collapse-title text-xl font-medium">What are the foods like Steel Yat? How does the mail plan work?</div>
                        <div className="collapse-content">
                            <p>Foods like those from Meals of Steel offer nutritious, chef-prepared meals with a focus on clean, healthy eating. They have a rotating menu of options that cater to different dietary needs, including paleo, vegan, gluten-free, and protein-packed meals. For example, some meals include dishes like Mint Chutney Salmon and Paleo Beef Lo-Mein (butternut squash noodles with sirloin steak). They also offer plant-based options such as Soyrizo Tacos and Spaghetti with Vegan Meatballs</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300 border-2">
                        <div className="collapse-title text-xl font-medium">How Do I Eat Fresh and Lean?</div>
                        <div className="collapse-content">
                            <p>Prioritize Fresh Ingredients: Incorporate plenty of fruits, vegetables, lean proteins, and whole grains. Opt for grass-fed meats, pasture-raised poultry, wild-caught seafood, and organic produce. These are often fresher and packed with more nutrients compared to processed alternatives.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300  border-2">
                        <div className="collapse-title text-xl font-medium">How long do my meals last?</div>
                        <div className="collapse-content">
                            <p>Refrigerated: Most pre-made meals, like those from services such as Fresh N' Lean, typically last 4-7 days when kept in the fridge. This timeline ensures that the food remains fresh and safe to eat without sacrificing taste or texture.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300  border-2">
                        <div className="collapse-title text-xl font-medium">What if I don't eat them all at once?</div>
                        <div className="collapse-content">
                            <p>In the Fridge: Meals can generally last up to 4-7 days when refrigerated. It's important to ensure they are kept in airtight containers and stored at a proper temperature to maintain freshness.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300  border-2">
                        <div className="collapse-title text-xl font-medium">What's in the food? Is it organic? Is it gluten free?</div>
                        <div className="collapse-content">
                            <p>Organic: Most meals are made from high-quality, organic ingredients sourced from local farms. This includes grass-fed beef, pasture-raised poultry, and wild-caught seafood. Fresh N' Lean focuses on using fresh, seasonal produce to ensure high nutrient content​</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className="rounded-lg" src="https://i.ibb.co.com/d5qwDNn/portrait-delivery-man-holding-cardboard-parcel.jpg" alt="" />
            </div>
        </div>
        <div>
            <Works></Works>
        </div>
    </div>;
};
export default How;