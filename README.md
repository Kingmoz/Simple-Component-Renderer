# Simple Component Renderer

Simple react project that renders components based on a JSON file

## How to run

```
npm install
npm start
```

## JSON mechanism explained

```
{
  "type":"Box", // Component name ( Must match the name in `src/components`)
  "content":"Hello", // Contents to be rendered by the component
  "css": {  // Component's css will be overrided by this object
    "border-color":"#6d8fbd",
    "background":"#dae8fb"
  },
  "children":[  // Nested children ( Component must support nested children )
    {
      "id": "1",  // Unique ID within the children array
      "type":"Text",
      "content":"foo"
    },
    ...
  ]
}
```

## Further improvement
- Support css override for complicated component
  -  e.g. Nested css object in JSON: `css: { main: {...}, header: {...} }`
