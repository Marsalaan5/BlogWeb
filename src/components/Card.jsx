
import React from 'react';
import iimg1 from '../assets/iimg1.jpg';
import iimg2 from '../assets/iimg2.png';
import iimg3 from '../assets/iimg3.webp';
import iimg4 from '../assets/iimg4.jpg';

function Cardd() {
  const cardItems = [
    {
      id: 1,
      img: iimg1,
      type: "Industry News",
      title: "Tech Industry Sees Rapid Growth in AI Innovations",
      description: "The technology sector is witnessing a surge in artificial intelligence advancements, with new applications being developed across various industries.",
      link: "https://dig.watch/?gad_source=1&gclid=CjwKCAjwko21BhAPEiwAwfaQCAJOvD4SO_HLqN3tOv5zvrp98GgoUCSugBLTPE4SF7Mz5bhpN3bAXhoCh8wQAvD_BwE",
      date: "July 26, 2024",
    },
    {
      id: 2,
      img: iimg2,
      type: "Blog Updates",
      title: "Introducing Our New Blog Layout",
      description: "We are excited to unveil a fresh look for our blog! The new layout features a cleaner design, improved navigation, and enhanced readability.",
      date: "July 25, 2024",
      link: "https://www.livemint.com/opinion/blogs",
    },
    {
      id: 3,
      img: iimg3,
      type: "Event Announcements",
      title: "Join Our Upcoming Webinar on Digital Marketing",
      description: "Don't miss our upcoming webinar on the latest trends in digital marketing. Register now to secure your spot!",
      date: "August 5, 2024",
      link: "https://www.eventindustrynews.com/"
    },
    {
      id: 4,
      img: iimg4,
      type: "Industry News",
      title: "New Data Privacy Regulations in the EU",
      description: "The European Union has introduced new data privacy regulations aimed at enhancing consumer protection and data security. Businesses operating in the region must comply with these changes by the end of the year.",
      date: "July 24, 2024",
      link: "https://www.project-syndicate.org/?utm_term=today%27s%20economic%20news&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=1220154768&hsa_cam=18396741313&hsa_grp=141985559736&hsa_ad=623244829635&hsa_src=g&hsa_tgt=kwd-296062207419&hsa_kw=today%27s%20economic%20news&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwko21BhAPEiwAwfaQCIJfkktTpIHm4w5pWY8o2ZaeDzARWDAHgnXU3-8dUH3v4He7p4QOkBoC6-8QAvD_BwE"
    },
  ];

  return (
    <div name="NewsUpdates" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Latest News & Updates</h2>
      <p className="text-center mb-12 text-lg text-gray-600">
        Stay updated with the latest trends, blog updates, and upcoming events.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardItems.map(({ id, img, type, title, date, description, link }) => (
          <div
            className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
            key={id}
          >
            <div className="relative">
              <img
                src={img}
                className="w-full h-60 object-cover"
                alt={`News item ${id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="font-semibold text-blue-600">{type}</span>
                <span>{date}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-lg"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardd;

