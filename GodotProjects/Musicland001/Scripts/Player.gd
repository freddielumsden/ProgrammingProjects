extends KinematicBody

const _angular_speed:float = TAU

var moveSpeed := -500.0
var jumpForce := 10.0
var gravity := 20
var vel := Vector3()

var _target_angle:float
	
func _physics_process(delta:float) -> void:
	# Input
	var turn_input := Vector2(
		Input.get_action_strength("move_right") - Input.get_action_strength("move_left"),
		Input.get_action_strength("move_backward") - Input.get_action_strength("move_forward")
	).normalized()
	
	# Rotation
	if turn_input.length_squared() > 0:
		_target_angle = 0.75 * TAU - turn_input.angle()
		
	var angle_diff := wrapf(_target_angle - rotation.y, -PI, PI)
	rotation.y += clamp(delta * _angular_speed, 0, abs(angle_diff)) * sign(angle_diff)
	
	# Velocity
	vel.x = turn_input.x * moveSpeed * delta
	vel.z = turn_input.y * moveSpeed * delta
	vel.y -= gravity * delta
	if Input.is_action_pressed("jump") and is_on_floor():
		vel.y = jumpForce
	
	# Motion
	vel = move_and_slide(vel, Vector3.UP)
