// Mock blog data storage
let blogs = [
  {
    id: 1,
    title: 'Understanding Anxiety Disorders',
    excerpt: 'Learn about the different types of anxiety disorders and their symptoms.',
    content: `<p>Anxiety disorders are a group of mental health conditions characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities.</p>
    <p>Types of anxiety disorders include:</p>
    <ul>
      <li><strong>Generalized Anxiety Disorder (GAD)</strong>: Persistent and excessive worry about various things.</li>
      <li><strong>Panic Disorder</strong>: Recurrent panic attacks, which are sudden periods of intense fear.</li>
      <li><strong>Social Anxiety Disorder</strong>: Fear of social situations and interactions with other people.</li>
      <li><strong>Specific Phobias</strong>: Fear of specific objects or situations, such as heights or flying.</li>
    </ul>
    <p>Treatment options typically include psychotherapy (such as cognitive-behavioral therapy), medication, or a combination of both. Lifestyle changes such as stress management techniques, exercise, and avoiding certain substances can also help reduce anxiety symptoms.</p>
    <p>If you or someone you know is struggling with anxiety, it's important to seek help from a mental health professional. With proper treatment, many people with anxiety disorders can lead fulfilling lives.</p>`,
    author: 'Dr. Harpuneet',
    date: '2023-09-15',
    category: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['anxiety', 'mental health', 'disorders']
  },
  {
    id: 2,
    title: 'The Importance of Sleep for Mental Health',
    excerpt: 'Discover how sleep affects your mental wellbeing and tips for better sleep hygiene.',
    content: `<p>Sleep is essential for maintaining good mental health. During sleep, your brain processes information from the day and forms new pathways for learning and memory.</p>
    <p>Poor sleep has been linked to various mental health problems, including:</p>
    <ul>
      <li>Depression</li>
      <li>Anxiety</li>
      <li>Bipolar disorder</li>
      <li>Increased stress levels</li>
    </ul>
    <p>Good sleep hygiene practices include:</p>
    <ol>
      <li>Maintaining a consistent sleep schedule</li>
      <li>Creating a relaxing bedtime routine</li>
      <li>Keeping your bedroom comfortable, dark, and quiet</li>
      <li>Avoiding screens before bedtime</li>
      <li>Limiting caffeine and alcohol</li>
    </ol>
    <p>If you're struggling with sleep, talk to a healthcare provider. They can help identify any underlying issues and recommend appropriate treatments.</p>`,
    author: 'Dr. Harpuneet',
    date: '2023-10-02',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['sleep', 'mental health', 'wellness']
  },
  {
    id: 3,
    title: 'Navigating Depression: Signs, Symptoms, and Treatment Options',
    excerpt: 'Recognizing depression symptoms and understanding available treatment approaches.',
    content: `<p>Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition that requires understanding and medical care.</p>
    <p>Common symptoms of depression include:</p>
    <ul>
      <li>Persistent sadness or feelings of emptiness</li>
      <li>Loss of interest in activities once enjoyed</li>
      <li>Changes in appetite or weight</li>
      <li>Sleep disturbances</li>
      <li>Fatigue or loss of energy</li>
      <li>Feelings of worthlessness or guilt</li>
      <li>Difficulty thinking, concentrating, or making decisions</li>
      <li>Thoughts of death or suicide</li>
    </ul>
    <p>Depression is one of the most treatable mental disorders. Between 80% and 90% of people with depression eventually respond well to treatment.</p>
    <p>Treatment approaches may include:</p>
    <ol>
      <li><strong>Psychotherapy</strong>: Such as cognitive-behavioral therapy (CBT) or interpersonal therapy</li>
      <li><strong>Medication</strong>: Antidepressants can help modify brain chemistry</li>
      <li><strong>Lifestyle changes</strong>: Regular exercise, healthy diet, and social support</li>
      <li><strong>Brain stimulation therapies</strong>: For cases where other treatments haven't been effective</li>
    </ol>
    <p>If you're experiencing symptoms of depression, it's important to seek help from a mental health professional. Depression is not a sign of weakness, and seeking help is a sign of strength.</p>`,
    author: 'Dr. Harpuneet',
    date: '2023-11-05',
    category: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1476782916354-326ab24c93df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['depression', 'mental health', 'treatment']
  }
];

// Helper function to truncate data URLs for storage efficiency
const processImageUrl = (url) => {
  // If it's a data URL, we would normally save it to a server
  // For this mock service, we'll keep it as is, but in a real app
  // you would upload the image to a storage service and save the URL
  return url;
};

// Get all blogs
export const getAllBlogs = () => {
  return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Get blog by ID
export const getBlogById = (id) => {
  return blogs.find(blog => blog.id === parseInt(id));
};

// Create a new blog
export const createBlog = (blogData) => {
  const processedImage = processImageUrl(blogData.image);
  
  const newBlog = {
    ...blogData,
    image: processedImage,
    id: blogs.length > 0 ? Math.max(...blogs.map(blog => blog.id)) + 1 : 1,
    author: 'Dr. Harpuneet',
    date: new Date().toISOString().split('T')[0]
  };
  
  blogs.push(newBlog);
  return newBlog;
};

// Update a blog
export const updateBlog = (id, blogData) => {
  const index = blogs.findIndex(blog => blog.id === parseInt(id));
  if (index === -1) return null;
  
  const processedImage = processImageUrl(blogData.image);
  
  const updatedBlog = {
    ...blogs[index],
    ...blogData,
    image: processedImage,
    id: parseInt(id) // Ensure ID doesn't change
  };
  
  blogs[index] = updatedBlog;
  return updatedBlog;
};

// Delete a blog
export const deleteBlog = (id) => {
  const index = blogs.findIndex(blog => blog.id === parseInt(id));
  if (index === -1) return false;
  
  blogs.splice(index, 1);
  return true;
};

// Get blogs by category
export const getBlogsByCategory = (category) => {
  return blogs
    .filter(blog => blog.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Search blogs
export const searchBlogs = (query) => {
  query = query.toLowerCase();
  return blogs.filter(blog => 
    blog.title.toLowerCase().includes(query) || 
    blog.excerpt.toLowerCase().includes(query) || 
    blog.content.toLowerCase().includes(query) ||
    blog.tags.some(tag => tag.toLowerCase().includes(query))
  );
}; 