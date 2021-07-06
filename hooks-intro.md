

```sh

// this works like componentDidMount()
useEffect(()=>{
  console.log("This should only run once!")
},[]);


useEffect(()=>{
  console.log("This should only run with any state update!")
});

useEffect(()=>{
  console.log("This should only run whenever count is updated!")
},[count]);
```

JSON.parse() vs JSON.stringify()

JSON.parse() takes JSON string and transforms it into a Javascript Object.
JSON.stringify() takes Javascript Object and transforms it into a JSON string.