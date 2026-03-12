function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// TODO: implement validateUsername
// Should accept 3-20 alphanumeric characters

module.exports = { validateEmail };
