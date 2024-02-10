export default function App() {
  return (
    <picture className="hero__img">
      <source
        srcSet="../public/images/image-hero-desktop.jpg"
        media="(min-width: 90rem)"
      />
      <source srcSet="../public/images/image-hero-mobile.jpg" />
      <img src="../public/images/image-hero-mobile.jpg" alt="hero image" />
    </picture>
  );
}
