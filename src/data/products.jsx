const products = [
  { id: 1,  title: "accusamus beatae ad facilis cum similique qui sunt", color: "92c952" },
  { id: 2,  title: "reprehenderit est deserunt velit ipsam", color: "771796" },
  { id: 3,  title: "officia porro iure quia iusto qui ipsa ut modi", color: "24f355" },
  { id: 4,  title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae", color: "d32776" },
  { id: 5,  title: "natus nisi omnis corporis facere molestiae rerum in", color: "f66b97" },
  { id: 6,  title: "accusamus ea aliquid et amet sequi nemo", color: "56a8c2" },
  { id: 7,  title: "officia delectus consequatur vero aut veniam explicabo molestias", color: "b0f7cc" },
  { id: 8,  title: "aut porro officiis laborum odit ea laudantium corporis", color: "54176f" },
  { id: 9,  title: "qui eius qui autem sed", color: "51aa97" },
  { id: 10, title: "beatae et provident et ut vel", color: "810b14" },
  { id: 11, title: "nihil at amet non hic quia qui", color: "1ee8a4" },
  { id: 12, title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores", color: "66b7d2" },
  { id: 13, title: "repudiandae iusto deleniti rerum", color: "197d29" },
  { id: 14, title: "est necessitatibus architecto ut laborum", color: "61a65" },
  { id: 15, title: "harum dicta similique quis dolore earum ex qui", color: "f9cee5" },
  { id: 16, title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt", color: "fdf73e" },
  { id: 17, title: "natus doloribus necessitatibus ipsa", color: "9c184f" },
  { id: 18, title: "laboriosam odit nam necessitatibus et illum dolores reiciendis", color: "1fe46f" },
  { id: 19, title: "perferendis nesciunt eveniet et optio a", color: "56acb2" },
  { id: 20, title: "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error", color: "8985dc" },
  { id: 21, title: "ad et natus qui", color: "5e12c6" },
  { id: 22, title: "et ea illo et sit voluptas animi blanditiis porro", color: "45601a" },
  { id: 23, title: "harum velit vero totam", color: "e924e6" },
  { id: 24, title: "beatae officiis ut aut", color: "8f209a" },
  { id: 25, title: "facere non quis fuga fugit vitae", color: "5e3a73" },
  { id: 26, title: "asperiores nobis voluptate qui", color: "474645" },
  { id: 27, title: "sit asperiores est quos quis nisi veniam error", color: "c984bf" },
  { id: 28, title: "non neque eligendi molestiae repudiandae illum voluptatem qui aut", color: "392537" },
  { id: 29, title: "aut ipsam quos ab placeat omnis", color: "602b9e" },
  { id: 30, title: "odio enim voluptatem quidem aut nihil illum", color: "372c93" },
  { id: 31, title: "voluptate voluptates sequi", color: "a7c272" },
  { id: 32, title: "ad enim dignissimos voluptatem similique", color: "c70a4d" },
  { id: 33, title: "culpa ipsam nobis qui fuga magni et mollitia", color: "501fe1" },
  { id: 34, title: "vitae est facere quia itaque adipisci perferendis id maiores", color: "35185e" },
  { id: 35, title: "tenetur minus voluptatum et", color: "c96cad" },
  { id: 36, title: "expedita rerum eaque", color: "4d564d" },
  { id: 37, title: "totam voluptas iusto deserunt dolores", color: "ea51da" },
  { id: 38, title: "natus magnam iure rerum pariatur molestias dolore nisi", color: "4f5b8d" },
  { id: 39, title: "molestiae nam ullam et rerum doloribus", color: "1e71a2" },
  { id: 40, title: "est quas voluptates dignissimos sint praesentium nisi recusandae", color: "3a0b95" },
  { id: 41, title: "in voluptatem doloremque cum atque architecto deleniti", color: "659403" },
  { id: 42, title: "voluptatibus a autem molestias voluptas architecto culpa", color: "ca50ac" },
  { id: 43, title: "eius hic autem ad beatae voluptas", color: "6ad437" },
  { id: 44, title: "neque eum provident et inventore sed ipsam dignissimos quo", color: "29fe9f" },
  { id: 45, title: "praesentium fugit quis aut voluptatum commodi dolore corrupti", color: "c4084a" },
  { id: 46, title: "quidem maiores in quia fugit dolore explicabo occaecati", color: "e9b68" },
  { id: 47, title: "et soluta est", color: "b4412f" },
  { id: 48, title: "ut esse id", color: "68e0a8" },
  { id: 49, title: "quasi quae est modi quis quam in impedit", color: "2cd88b" },
  { id: 50, title: "et inventore quae ut tempore eius voluptatum", color: "9e59da" }
];

let productsWithPrice = [];

export function fetchProducts() {
  if (productsWithPrice.length === 0) {
    productsWithPrice = products.map((product) => {
      // สร้าง URL ของรูป (พื้นหลังสี + ตัวหนังสือสีขาว + หมายเลข id)
      product.thumbnailUrl = `https://placehold.co/150x150/${product.color}/ffffff?text=${product.id}`;
      // สุ่มราคา
      product.price = Math.round(Math.random() * 9000) / 100 + 10;
      return product;
    });
  }
  return productsWithPrice;
}
