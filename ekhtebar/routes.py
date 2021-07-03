from flask import render_template, flash, redirect, url_for
from ekhtebar import app
from ekhtebar.forms import TeacherLoginForm, RegesterForm, StudentLog


# note that no "signup as student" in routes because it will be deleted


@app.route("/")
@app.route("/home")
@app.route("/ekhtebar")
def home_page():
    return render_template('index.html')


@app.route("/ekhtebar/teacher_signup", methods=['GET', 'POST'])  # used exactly the same name in front
def signup_teacher():
    form = RegesterForm()
    if form.validate_on_submit():
        flash(f'{form.teacher_first_name.data}, Account Created Successfully', 'success')
        return redirect(url_for('home_page'))
    return render_template('pages/sign.html', title='Sign Up', form=form)


@app.route("/ekhtebar/teacher_login", methods=['GET', 'POST'])  # used exactly the same name in front
def signin_teacher():
    form = TeacherLoginForm()
    return render_template('pages/sign.html', title='Log In', form=form)


@app.route("/ekhtebar/student_login")  # used exactly the same name in front
def sign_student():
    form = StudentLog()
    return render_template('pages/SignInAsStudent.html', title='Student Log', form=form)


@app.route("/ekhtebar/about")    # used exactly the same name in front
def about():
    pass


@app.route("/ekhtebar/controlpanel")  # used exactly the same name in front
def dashboard():
    return render_template('pages/controlpanel.html', title='dashboard')
