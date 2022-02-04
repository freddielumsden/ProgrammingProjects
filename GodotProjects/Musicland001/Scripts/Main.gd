extends Spatial


var mouse_captured : bool = false


func _ready():
	$AnimationPlayer.play("Fade")

func _input(event):
	if event is InputEventKey:
		if event .pressed and event.scancode == KEY_F:
			if mouse_captured == false:
				Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)
				mouse_captured = true
			else:
				Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)
				mouse_captured = false
				
				

	
