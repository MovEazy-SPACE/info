const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-hori');
        }
    })
});

const hiddenElements1 = document.querySelectorAll('.hidden-hori');
hiddenElements1.forEach((el) => observer1.observe(el))



window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

const blogs = {
    "real-estate-trends": {
        title: "Latest Trends in Real Estate Expansion",
        content: `In the ever-evolving world of real estate, expansion strategies are rapidly transforming. From smart technology integration to eco-friendly infrastructure, the industry is witnessing groundbreaking innovations that are reshaping urban landscapes.

        Data-Driven Site Selection:
        Brands are leveraging big data and AI-powered analytics to identify prime locations. For instance, retail giants like Amazon and Starbucks use predictive models to choose high-traffic areas and understand customer demographics.

        Flexible Leasing Models:
        With the rise of co-working spaces and pop-up shops, businesses are opting for short-term, flexible leasing options. This approach reduces financial risk while testing new markets.

        Sustainable Infrastructure:
        Green building practices and energy-efficient designs are becoming essential for long-term success. Companies like Tesla and Google are leading the way with solar-powered facilities and eco-friendly office spaces.

        Mixed-Use Developments:
        Developers are creating spaces that blend residential, commercial, and recreational areas. For example, Hudson Yards in New York City offers luxury apartments, office spaces, and entertainment hubs all in one location.

        Technology Integration:
        Smart buildings equipped with IoT sensors and automated systems enhance security, reduce energy consumption, and improve tenant experiences.

        These trends are not just reshaping skylines but also revolutionizing how businesses expand into new markets. Staying ahead in this dynamic landscape requires agility and innovation.`,
        background: 'images/blog image1.jpg'
    },
    "location-matters": {
        title: "Why Location Matters for Your Brand",
        content: `In the competitive business landscape, choosing the right location can make or break a brand’s success. Here’s why:

        1. Target Audience Accessibility:
        Being situated in high-traffic areas or near your target demographic boosts visibility and customer engagement. For instance, fashion brands thrive in bustling shopping districts, while tech startups flourish in innovation hubs like Silicon Valley.

        2. Market Positioning:
        The right location helps establish brand identity. Luxury brands often opt for upscale neighborhoods to align with their premium image, while eco-friendly brands may choose sustainable communities to reinforce their values.

        3. Operational Efficiency:
        Proximity to suppliers, transportation hubs, and skilled labor pools can reduce costs and enhance productivity. For example, manufacturing units near ports streamline logistics and reduce shipping expenses.

        4. Competitive Advantage:
        Being close to competitors can attract more customers and create a niche market. For instance, food courts with multiple eateries draw more foot traffic, benefiting all vendors.

        5. Local Regulations and Incentives:
        Certain areas offer tax benefits and incentives for specific industries. Tech parks and special economic zones often provide perks that can significantly lower operational costs.

        Selecting the ideal location isn’t just about physical space; it’s about positioning your brand for growth and long-term success.`,
        background: 'images/blog image 2.png'
    },
    "turnkey-solutions": {
        title: "Turnkey Solutions for Business Growth",
        content: `In today’s fast-paced market, businesses are turning to turnkey solutions to streamline their expansion efforts. Here’s how these comprehensive packages are driving growth:

        1. Speed and Efficiency:
        Turnkey solutions provide ready-made infrastructure, allowing businesses to launch operations quickly. For instance, MovEazy offers fully furnished showrooms and market-ready spaces that eliminate the hassle of setup.

        2. Cost-Effectiveness:
        By bundling services like site selection, design, and logistics, turnkey solutions reduce overhead costs and maximize ROI. This approach is especially beneficial for startups and franchises looking to scale rapidly.

        3. Expert Support:
        With professional guidance in areas like legal compliance, branding, and technology integration, businesses can focus on core operations while experts handle the technical aspects.

        4. Customization and Flexibility:
        Turnkey solutions are tailored to meet specific business needs. For example, retail brands can choose spaces in high-footfall areas, while tech companies can opt for innovation-friendly environments.

        5. Risk Mitigation:
        By leveraging industry insights and local market knowledge, turnkey providers help mitigate risks associated with expansion, such as regulatory issues and cultural differences.

        Embracing turnkey solutions not only accelerates business growth but also ensures a smooth and hassle-free expansion journey.`,
        background: 'images/blog images3.jpg'
    }
};

const params = new URLSearchParams(window.location.search);
const blogKey = params.get("blog");

if (blogKey && blogs[blogKey]) {
    document.getElementById("blog-title").innerText = blogs[blogKey].title;
    document.getElementById("blog-content").innerText = blogs[blogKey].content;
    document.getElementById("blog-background").style.backgroundImage = `url('${blogs[blogKey].background}')`;
} else {
    document.getElementById("blog-title").innerText = "Blog Not Found";
    document.getElementById("blog-content").innerText = "Sorry, the blog you are looking for does not exist.";
}
