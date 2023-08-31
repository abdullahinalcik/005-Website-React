import "../styles/Services.css"

const Services = () => {
  return (
    <section class="services" id="services">
    <div>
      <h3>Services</h3>
      <br />
      <div class="design">
        <h3>Website Design</h3>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          dolores ullam iusto. Maiores neque excepturi eos, consequatur
          ratione corrupti ad.
        </p>
        <br />

        <p>Pricing: $1.000-$3.000</p>
      </div>
      <div class="maintance">
        <h3>Website Maintenance</h3>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          dolores ullam iusto. Maiores neque excepturi eos, consequatur
          ratione corrupti ad.
        </p>
        <br />

        <p>Pricing: $250 per month</p>
      </div>
      <div class="hosting">
        <h3>Website Hosting</h3>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          dolores ullam iusto. Maiores neque excepturi eos, consequatur
          ratione corrupti ad.
        </p>
        <br />

        <p>Pricing: $25 per month</p>
      </div>
    </div>
    <div>
      <form action="">
        <h4>Get A Quote</h4>
        <br />
        <table>
          <tr>
            <td><label for="name">Name</label></td>
          </tr>
          <tr>
            <td><input type="text" id="name" /></td>
          </tr>
          <tr>
            <td><label for="email2">Email</label></td>
          </tr>
          <tr>
            <td><input type="text" id="email2" /></td>
          </tr>
          <tr>
            <td><label for="message">Message</label></td>
          </tr>
          <tr>
            <td><textarea name="" id="" cols="21" rows=""></textarea></td>
          </tr>
          <tr>
            <td><button type="submit">Send</button></td>
          </tr>
        </table>
      </form>
    </div>
  </section>
  )
}

export default Services