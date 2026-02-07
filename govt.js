let complaints = [
  {
    leader: "Aditya ",
    problem: "Atikraman",
    address: "Gorakhpur, UP",
    image: "images/stray.jpg",
    mobile: "9876543210"
  },
  {
    leader: "Rekha",
    problem: "Mismanagement",
    address: "South Delhi, Delhi",
    image: "images/road.jpg",
    mobile: "9123456789"
  },
  {
    leader: "Rahul ",
    problem: "Road Management",
    address: "Wayanad, Kerala",
    image: "images/water.jpg",
    mobile: "9988776655"
  }
];

function loadComplaints() {
  const tbody = document.querySelector("#complaintsTable tbody");
  tbody.innerHTML = "";

  complaints.forEach((c, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${c.leader}</td>
      <td>${c.problem}</td>
      <td>${c.address}</td>

      <!-- 🔥 DIRECT IMAGE -->
      <td>
        <img src="${c.image}" class="problem-img">
      </td>

      <td>${c.mobile}</td>

      <td>
        <button class="btn-finish" onclick="finishTask(${index}, this)">
          Finish
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function finishTask(index, btn) {
  const row = btn.closest("tr");
  row.classList.add("fade-out");

  setTimeout(() => {
    alert(`Problem solved for ${complaints[index].leader} ✅`);
    complaints.splice(index, 1);
    loadComplaints();
  }, 600);
}

window.onload = loadComplaints;