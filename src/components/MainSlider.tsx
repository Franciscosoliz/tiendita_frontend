import Carousel from 'react-bootstrap/Carousel';
import './MainSlider.css'; // Asegúrate de importar el CSS

const MainSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t51.82787-15/522711011_18377859100122082_4614703524069799427_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHlYI27CjtFPXA0sd-TgAw6yb0Te68vSjLJvRN7ry9KMuDXiuhjyqqnn1hbWeyqZdtwJpGw53h2YHehcuAdTBaq&_nc_ohc=tWWQjDBltKEQ7kNvwHFejD8&_nc_oc=AdkAVowxDqENo_KlA8vbpkr9HFuVAv85ZlmF_ha-lzFOpkA3z7WOg8pyI-4uyNEvSvY&_nc_zt=23&_nc_ht=scontent.fuio1-2.fna&_nc_gid=1CAW0Cp_QwIS2hg-sJW_qw&oh=00_AfSEGdyBqQtLLOoWWKldhX33527RXG0b6oRwZlI5j57r5w&oe=6886FB68"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='main'>RUN SUPPORTED</h3>
          <p>Supportive cushioning for your daily runs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/472826342_536122342762561_1612395897891698701_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFGqqQh2WoNxhE6LHboFY6hG2Lr9YjOcM4bYuv1iM5wznComs1ybB70rdt-8083hQohnE5ROXveK4EjConAYkyS&_nc_ohc=IrrI9cdJ_icQ7kNvwGsAbbX&_nc_oc=AdkvFvdqutGCaCHN9laxgZDVBCbpLgLWBiAQsBRG93YKhmjS23EogXI5UruvvTY_Qvg&_nc_zt=23&_nc_ht=scontent.fuio1-2.fna&_nc_gid=AtFaoicmJ_0DKSy_N911fA&oh=00_AfT7LS6UGR7lhCxbnDJ_mB5bT97gYxf6JuacS-bqjaINkQ&oe=6886E563"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='main'>Practice Like A Pro</h3>
          <p>Back to Sport. Be ready.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t51.75761-15/488191400_18135145294398412_5591351083520110504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG5Yf9B57CSjniob7Z8AvLNObJY3rYXTlM5sljethdOU1JUZX4Dxpn6xkMCE9uAuqdqdq-vM0rpzVfdbBOjWrFf&_nc_ohc=SvfZbmOE0WoQ7kNvwEQ5Dtk&_nc_oc=AdkpiuvuKoNBx2htEmUFAWfeNurTZpUlRjUPqQvvYFVwbJBn3LnzpUvrBZcszF7ETtI&_nc_zt=23&_nc_ht=scontent.fuio1-1.fna&_nc_gid=gAQUKLiS2ZkCwwgASpH26A&oh=00_AfRU7AGRH_lrYkhTp8BwOf7gvVuYBdsbWnsNxnymqZBjPg&oe=6887040D"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='main'>Practice Like A Pro</h3>
          <p>Back to Sport. Be ready.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainSlider;
