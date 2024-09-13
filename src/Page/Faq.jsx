const Faq = () => {
    return <div>
        <div className="mt-16  mb-6">
            <div className="w-3/4
text-center mx-auto">
                <h1 className="text-5xl font-semibold ">Popular Frequently Asked Questions</h1>
                <p className="mt-4">Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?</p>

            </div>
            <div className="mt-14 w-3/4 mx-auto space-y-4">
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
        </div>  </div>;
};
export default Faq;