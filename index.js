var nama = "Wulan"; var money = 100000; var age = 25;

if (nama == 0 ){0
 console.log("Anda Tidak Boleh Masuk!");
  throw new Error('Program Berhenti');
}

if (age > 17 ){
  console.log("Anda hanya bisa pesan anggur");
  if (money >= 50000 )
  {
  console.log("Anda bisa pesan minum. Sisa uang anda:", money - 50000);
} else
{
 console.log("Uang tidak cukup anda harus pulang");
}
}
if (age < 17 ){
  console.log("Anda hanya bisa pesan Jus");
  if (money >= 20000 ){
  console.log("Anda bisa pesan minum. Sisa uang anda:", money - 20000);
} else{
  console.log("Uang Tidak Cukup Anda Harus Pulang.");
}
}