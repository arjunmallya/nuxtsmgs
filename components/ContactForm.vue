<template>
  <div class="mx-4 my-5">
    <div class="text-center pb-3">
      <h1>Get in touch</h1>
    </div>
    <form
      netlify
      action="/success"
      method="POST"
      name="Contact"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="Contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="bot-field" /> </label>
      </p>
      <div class="row">
        <div class="mb-3 col-md-6">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control form-control-lg"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="mb-3 col-md-6">
          <label for="phno">Mobile number:</label>
          <input
            type="phno"
            id="phno"
            name="phno"
            class="form-control form-control-lg"
            placeholder="Enter your mobile number"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control form-control-lg"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          class="form-control form-control-lg"
          placeholder="Enter your message"
          rows="3"
        ></textarea>
      </div>
      <button class="button text-white" type="submit">Submit</button>
    </form>
  </div>
</template>
