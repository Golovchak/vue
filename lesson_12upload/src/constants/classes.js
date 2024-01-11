const classesList = [
	{ id: 1, classTitle: "5-А" },
	{ id: 2, classTitle: "5-Б" },
	{ id: 3, classTitle: "5-В" },
	{ id: 4, classTitle: "6-А" },
	{ id: 5, classTitle: "6-Б" },
	{ id: 6, classTitle: "6-В" },
	{ id: 7, classTitle: "7-А" },
	{ id: 8, classTitle: "7-В" },
	{ id: 9, classTitle: "8-А" },
	{ id: 10, classTitle: "8-Б" },
	{ id: 11, classTitle: "9-А" },
	{ id: 12, classTitle: "9-Б" },
	{ id: 13, classTitle: "10-А" },
	{ id: 14, classTitle: "10-Б" },
	{ id: 15, classTitle: "11-А" },
	{ id: 16, classTitle: "11-Б" },
];
function getClassById(classId) {
	return classesList.find((classObj) => classObj.id == classId);
}
export { classesList, getClassById };
