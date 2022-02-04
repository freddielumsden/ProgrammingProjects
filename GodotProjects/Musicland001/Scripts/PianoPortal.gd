extends MeshInstance



func _on_Area_body_entered(body):
	get_tree().change_scene(("res://Scenes/RadioGame.tscn"))
