import Image from 'next/image';

export const metadata = {
  title: 'About Us - Skyline Shine',
  description: 'Learn about the story and values of Skyline Shine, and meet the owner Paul Frownfelter.',
};

export default function AboutPage() {
  return (
    <>
      {/* Main Content Area for About Page */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Our Story Section */}
          <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                Our Story
              </h1>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Skyline Shine was founded in 2023, a company founded on Christian values. For us, this means more than just offering a service – it’s about living out our faith in every aspect of our work. Integrity is at the heart of everything we do. Whether we’re serving clients or not, we lead with compassion, respect, and honesty. Every job we take on is an opportunity to not only deliver exceptional results but to truly give our best, regardless of how fast it gets done.
                </p>
                <p>
                  God’s presence isn’t just the foundation of Skyline Shine—it is the driving force that fuels our passion for excellence. Through His grace, we’ve overcome obstacles, celebrated countless milestones, and witnessed growth beyond anything I could’ve imagined. It’s His love and guidance that inspire us to approach each project with a heart of service and a desire to exceed expectations.
                </p>
                <p>
                  Each task we perform—whether cleaning your windows, clearing your gutters, or anything else—is more than a job to us. It’s a chance to serve with gratitude and reflect the love of Christ. I’ve trained my team to adopt this mindset because we believe that in everything we do, we have the opportunity to be a blessing to others and to showcase His goodness in our work.
                </p>
                <p>
                  Thank you for trusting Skyline Shine with your home. We don’t take that trust lightly, and we are honored to serve you with integrity, excellence, and a heart full of gratitude. May our work be a small reflection of God’s love and faithfulness in your life.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/about-owner-image-1.jpeg" alt="Paul Frownfelter, owner of Skyline Shine" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>

          {/* Meet The Owner Section */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Meet The Owner
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I’m Paul Frownfelter, the proud owner of Skyline Shine, and from a very young age, I had a vision to own my own business. I was drawn to the idea of entrepreneurship, and I quickly learned the importance of both time and money. From the ages of 13 to 16, I built my first client base through landscaping, working hard every summer for an average of $20 an hour. For a while, I thought that might be my path, at least until high school was behind me.
                </p>
                <p>
                  But God had a different plan. A life-changing opportunity came from a church friend who was a window cleaner. He was looking for someone to take over his business, offering me a chance to step in at a price I couldn’t pass up. I began working under him, learning the ropes, and eventually, he sold me his entire clientele.
                </p>
                <p>
                  In the three years since, I’ve poured my heart and soul into growing Skyline Shine into the business it is today. Each step of the journey has been guided by God's grace, and I’m incredibly grateful for every opportunity that’s come my way and for those still on the horizon. It’s a blessing to see this dream unfold, and I look forward to what’s next with faith and excitement.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/about-owner-image-2.jpeg" alt="Paul Frownfelter working" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

