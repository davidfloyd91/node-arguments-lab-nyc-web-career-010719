const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
let len, num, i;

if (process.argv.length === 4) {
  len = process.argv[2];
  num = process.argv[3];
} else if (process.argv.length === 3) {
  len = process.argv[1];
  num = process.argv[2];
};

for (let j = 0; j < num; j++) {
  let pass = '';

  for (let k = 0; k < len; k++) {
    i = Math.floor(Math.random() * (chars.length));
    pass += chars[i];
  };

  console.log(pass);
};

process.exit(0);
