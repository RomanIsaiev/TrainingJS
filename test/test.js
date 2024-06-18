function test() {
  const args = Array.from(arguments);
  console.log(args.splice(1, 0, 10));
  console.log(args);
}

test(1, 2, 3, 4, 5, 6);
