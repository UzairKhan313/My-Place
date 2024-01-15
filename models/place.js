class Place {
  constructor(title, imageUri, address, location) {
    (this.title = title),
      (this.imageUri = imageUri),
      (this.address = address),
      (this.location = location), // {lat:12312.09, long:8098.32}
      (this.id = new Date().toString() + Math.random().toString());
  }
}
