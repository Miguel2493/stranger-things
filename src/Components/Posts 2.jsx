const examplePost = {
    title: "Vintage record player",
    location: "Chicago",
    price: "$500",
  };

  const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
  
    const onFormSubmit = (event) => {
      event.preventDefault();
      const finalPost = {
        title: "!" + title + "!",
        location,
        price,
      };

