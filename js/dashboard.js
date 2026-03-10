const today=new Date();

let bulan=today.getMonth()+1;
let tahun=today.getFullYear();

document.getElementById("bulan").value=bulan;
document.getElementById("tahun").value=tahun;

load();

function load(){

bulan=document.getElementById("bulan").value;
tahun=document.getElementById("tahun").value;

fetch(API_URL+`?action=dashboard&bulan=${bulan}&tahun=${tahun}`)

.then(r=>r.json())

.then(d=>{

anggota.innerText=d.totalAnggota;
sudah.innerText=d.sudah;
belum.innerText=d.belum;

iuran.innerText=d.iuran;
pengeluaran.innerText=d.pengeluaran;
saldo.innerText=d.saldo;

new Chart(chart,{

type:"doughnut",

data:{

labels:["Iuran","Pengeluaran"],

datasets:[{

data:[d.iuran,d.pengeluaran]

}]

}

});

});

fetch(API_URL+`?action=belum&bulan=${bulan}&tahun=${tahun}`)

.then(r=>r.json())

.then(data=>{

let html="";

data.forEach(d=>{

html+=`<li>${d.nama}</li>`;

});

listBelum.innerHTML=html;

});

fetch(API_URL+`?action=transaksi&bulan=${bulan}&tahun=${tahun}`)

.then(r=>r.json())

.then(data=>{

let html="";

data.forEach(d=>{

html+=`

<tr>

<td>${d.tanggal}</td>
<td>${d.jenis}</td>
<td>${d.ket}</td>
<td>${d.jumlah}</td>

</tr>

`;

});

table.innerHTML=html;

});

}
