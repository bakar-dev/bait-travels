import { PACKAGE_IMAGES } from "./packages-data";

export const allBlogPosts = [
  {
    slug: '10-essential-items-to-pack-for-your-umrah-trip',
    title: '10 Essential Items to Pack for Your Umrah Trip',
    image: PACKAGE_IMAGES[10],
    aiHint: 'travel luggage',
    author: 'Baitullah Travels',
    date: 'October 26, 2023',
    content: `
        <p>Embarking on the sacred journey of Umrah is a deeply spiritual and transformative experience. To ensure your pilgrimage is as smooth and comfortable as possible, careful preparation is key. Packing the right items can make a significant difference, allowing you to focus on your prayers and rituals without unnecessary distractions. Here are 10 essential items you should pack for your Umrah trip.</p>
        <h3 class="font-bold text-lg my-4 text-primary">1. Ihram Clothing</h3>
        <p>The most crucial item for any pilgrim. For men, this consists of two seamless white cloths. For women, it is modest, loose-fitting clothing that covers the entire body except for the hands and face. Ensure you have a comfortable and properly sized Ihram.</p>
        <h3 class="font-bold text-lg my-4 text-primary">2. Prayer Mat & Tasbeeh</h3>
        <p>While the Grand Mosque has ample prayer space, having your own lightweight prayer mat can be convenient, especially during peak times. A digital or traditional tasbeeh (prayer beads) is also helpful for dhikr (remembrance of Allah).</p>
        <h3 class="font-bold text-lg my-4 text-primary">3. Comfortable Footwear</h3>
        <p>You will be doing a lot of walking, especially during Tawaf and Sa'i. Pack a pair of comfortable, broken-in sandals or slippers that are easy to take on and off. Avoid new shoes to prevent blisters.</p>
        <h3 class="font-bold text-lg my-4 text-primary">4. Waist Pouch or Neck Bag</h3>
        <p>A secure bag to keep your essentials like your passport, money, phone, and hotel key is vital. A waist pouch worn under your Ihram or a neck bag can keep your valuables safe from pickpockets.</p>
        <h3 class="font-bold text-lg my-4 text-primary">5. Unscented Toiletries</h3>
        <p>While in the state of Ihram, scented products are not permitted. Pack unscented soap, shampoo, deodorant, and sunscreen. It's also a good idea to bring a travel-sized bottle of hand sanitizer.</p>
      `
  },
  {
    slug: 'a-step-by-step-guide-to-performing-hajj',
    title: 'A Step-by-Step Guide to Performing Hajj',
    image: PACKAGE_IMAGES[11],
    aiHint: 'compass qibla',
    author: 'Baitullah Travels',
    date: 'October 22, 2023',
    content: `
        <p>Hajj, the annual pilgrimage to Makkah, is one of the five pillars of Islam. It is a spiritual duty that every Muslim who is physically and financially able must perform at least once in their lifetime. This guide provides a simplified step-by-step overview of the rituals of Hajj.</p>
        <h3 class="font-bold text-lg my-4 text-primary">Step 1: Ihram and Intention (Niyyah)</h3>
        <p>The journey begins by entering the state of Ihram. This involves making the intention (Niyyah) for Hajj and wearing the prescribed Ihram clothing before crossing the designated Miqat points.</p>
        <h3 class="font-bold text-lg my-4 text-primary">Step 2: Tawaf al-Qudum and Sa'i</h3>
        <p>Upon arrival in Makkah, pilgrims perform the 'Tawaf of Arrival' (Tawaf al-Qudum), which involves circling the Kaaba seven times. This is followed by Sa'i, walking and running between the hills of Safa and Marwah seven times.</p>
      `
  },
  {
    slug: 'the-spiritual-significance-of-zamzam-water',
    title: 'The Spiritual Significance of Zamzam Water',
    image: PACKAGE_IMAGES[12],
    aiHint: 'water spring',
    author: 'Baitullah Travels',
    date: 'October 18, 2023',
    content: `
        <p>Zamzam water holds a special place in the hearts of Muslims worldwide. Emerging from a well located within the Masjid al-Haram in Makkah, this blessed water is not just a source of hydration but a symbol of Allah's mercy and a reminder of a miraculous story from the time of Prophet Ibrahim (AS).</p>
        <h3 class="font-bold text-lg my-4 text-primary">The Miraculous Origin</h3>
        <p>The story of Zamzam dates back to Hajar (AS), the wife of Prophet Ibrahim, and their infant son, Ismail (AS). Left in the barren desert of Makkah by Allah's command, Hajar ran desperately between the hills of Safa and Marwah in search of water for her thirsty son. After her seventh run, the Angel Jibril struck the ground, and water miraculously gushed forth. This spring became the Well of Zamzam.</p>
      `
  }
];

export const getBlogPostBySlug = (slug: string) => {
  const post = allBlogPosts.find(p => p.slug === slug);
  return post || {
    slug: 'not-found',
    title: 'Blog Post Not Found',
    image: PACKAGE_IMAGES[13],
    aiHint: 'desert landscape',
    author: 'System',
    date: new Date().toLocaleDateString(),
    content: '<p>The blog post you are looking for does not exist. Please check the URL and try again.</p>',
  };
}
