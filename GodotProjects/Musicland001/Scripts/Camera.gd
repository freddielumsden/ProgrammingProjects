extends Camera

var perspective : String = "3rd Person"
func _ready():
	while true:
		yield(get_tree().create_timer(0.1), "timeout")
		if Input.is_action_pressed("change_perspective") and perspective == "3rd Person":
			perspective = "1st Person"
			global_transform.origin = Vector3(get_tree().get_root().get_node("Main/Player").get_global_transform()[3][0], get_tree().get_root().get_node("Main/Player").get_global_transform()[3][1] + 2.5, get_tree().get_root().get_node("Main/Player").get_global_transform()[3][2] + 1)
			rotation_degrees.x = --10
		elif Input.is_action_pressed("change_perspective") and perspective == "1st Person":
			perspective = "3rd Person"
			global_transform.origin = Vector3(get_tree().get_root().get_node("Main/Player").get_global_transform()[3][0], get_tree().get_root().get_node("Main/Player").get_global_transform()[3][1] + 8, get_tree().get_root().get_node("Main/Player").get_global_transform()[3][2] - 8)
			rotation_degrees.x = -30
