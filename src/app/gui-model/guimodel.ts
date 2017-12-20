export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden

    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick
    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.
    */

    private _guiModel = {
        "application": {
            "title": "Jonas' Friend Tracker",
            "formList": [
				{
					"id": "GroupForm",
					"title": "Group",
					"formFieldList": [
						{
							"id": "name",
							"type": "text",
							"name": "GroupName",
							"width": 2,
							"required": true
						},
						{
							"type": "deleteButton",
							"name": "Delete"
						},
						{
							"type": "cancelButton",
							"name": "Cancel"
						},
						{
							"type": "okButton",
							"name": "Ok"
						}
					]
				},
				{
					"id": "ActivityForm",
					"title": "Activity",
					"formFieldList": [
						{
							"id": "name",
							"type": "text",
							"name": "ActivityName",
							"width": 2,
							"required": true
						},
						{
							"id": "location",
							"type": "autocomplete",
							"name": "LocationName",
							"width": 2,
							"required": true
						},
						{
							"type": "deleteButton",
							"name": "Delete"
						},
						{
							"type": "cancelButton",
							"name": "Cancel"
						},
						{
							"type": "okButton",
							"name": "Ok"
						}
					]
				},
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{
                            "id": "nickname",
                            "type": "text",
                            "name": "NickName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
						{
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "data": [ "Study", "Family", "School" ],
                            "form": "GroupForm",
                            "width": 2,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
						{
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                        },
						{
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-calendar",
                            "color": "green",
                            "page": "activitypage",
                        }
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "friendActivityPage"
                        },
                    ]
                },{
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "icon": "fa-calendar",
                            "color": "green",
                            "search": true,
                            "data": [ { name: "Eating Pizza" }, { name: "Watching Movies"} ],
                            "page": "participationpage"
                        },
                    ]
                },{
                    "id": "participationpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacher" }, { name: "Britta Beavers"} ],
                            "form": {
								"form": "FriendForm"
							}
                        },
                    ]
                },{
                    "id": "friendActivityPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
						{
                            "type": "newButton",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-calendar",
                            "color": "green",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-calendar",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Eating Pizza" }, { name: "Dunkin Donuts"}, { name: "Seilrutschenparty" } ],
                            "form": {
								"form": "ActivityForm"
							}
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
				{
					"id": "groupspage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "NewGroup",
							"icon": "fa-weixin",
							"color": "green",
							"form": {
								"form": "GroupForm"
							}
						},
						{
							"type": "list",
							"icon": "fa-weixin",
							"color": "wisteria",
							"search": true,
							"data": [ { name: "Study" }, { name: "Family" }, { name: "School" } ],
							"form": {
								"form": "GroupForm"
							}
						}
					]	
				}
			]	
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
