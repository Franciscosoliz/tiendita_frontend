import Carousel from 'react-bootstrap/Carousel';

const MainSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/w_1223,c_limit/0fd0039a-08db-4e06-930f-6735a319cbdf/sitio-web-oficial-de-nike.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>RUN SUPPORTED</h3>
          <p>Supportive cushioning for your daily runs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://instagram.fuio13-1.fna.fbcdn.net/v/t39.30808-6/472490172_536275286080600_6638987308603383289_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjIwMDB4MjAwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fuio13-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QEMJrIKQSYYtsEf6u5pG6CQWb-9D5wJBlM8XJps6UNEeJ0ZXO5zmlK8NUWRMtEF4r0&_nc_ohc=hK8t3_sXwtoQ7kNvwEWlC7V&_nc_gid=4YcYZPEZDzNjuCbf-ar9fA&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzI0MDI0MjM4NzMxNjg2NzUwMA%3D%3D.3-ccb7-5&oh=00_AfTxEvKiUxaB8IkXUh9aXCtDY_7kU98GXhV9ba05Y9ec0Q&oe=6886279A&_nc_sid=7a9f4b"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Practice Like A Pro</h3>
          <p>Back to Sport. Be ready.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://instagram.fuio13-1.fna.fbcdn.net/v/t39.30808-6/472490172_536275286080600_6638987308603383289_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjIwMDB4MjAwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fuio13-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QEMJrIKQSYYtsEf6u5pG6CQWb-9D5wJBlM8XJps6UNEeJ0ZXO5zmlK8NUWRMtEF4r0&_nc_ohc=hK8t3_sXwtoQ7kNvwEWlC7V&_nc_gid=4YcYZPEZDzNjuCbf-ar9fA&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzI0MDI0MjM4NzMxNjg2NzUwMA%3D%3D.3-ccb7-5&oh=00_AfTxEvKiUxaB8IkXUh9aXCtDY_7kU98GXhV9ba05Y9ec0Q&oe=6886279A&_nc_sid=7a9f4b"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Practice Like A Pro</h3>
          <p>Back to Sport. Be ready.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainSlider;
