extends Spatial


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _physics_process(delta):
	global_transform[3] = get_tree().get_root().get_node("Main/Player").get_global_transform()[3]

