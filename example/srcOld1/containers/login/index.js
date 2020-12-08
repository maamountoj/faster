import React, { useEffect } from 'react'

import { Button, Input, Form, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import { RootContainer, LoginContainer } from './styles'
import {
  loginAction,
  getCommentsAction,
  getGroupsAction,
  getGroupByIdAction,
  getModeratorsAction
} from '../../redux/actionsStore'

function Login() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const groups = useSelector((state) => state.group.groups)
  const state = useSelector((state) => state)

  const onFinish = (values) => {
    const { username, password } = values
    dispatch(
      loginAction({
        pseudoName: username,
        password
      })
    )
    dispatch(
      getCommentsAction({
        pseudoName: username,
        password
      })
    )
    dispatch(getGroupsAction())
    dispatch(getModeratorsAction({ params: { page: 1 } }))
  }

  useEffect(() => {
    if (auth && auth.error) {
      console.log(auth.error)
      message.error(
        'The email or password you’ve entered doesn’t match any account'
      )
    }
  }, [auth])

  return (
    <RootContainer>
      {console.log('auth', auth)}
      {console.log('state', state)}
      {console.log('groups', groups)}
      <div className='flex flex-col'>
        {groups?.map(({ _id }, index) => (
          <button
            key={_id}
            onClick={() => {
              dispatch(getGroupByIdAction({ params: { id: _id } }))
            }}
          >
            {_id}
          </button>
        ))}
      </div>
      <LoginContainer>
        <h1 className='title'>Login</h1>
        <h2 className='subtitle'>CARS GROUP</h2>

        {/*************************** Form Login  ************************************/}
        <Form
          layout='vertical'
          name='normal_login'
          className='login-form w-22rem'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {/************** Input Username **************/}
          <Form.Item
            name='username'
            label={<div className='text-white'>Username</div>}
            rules={[
              {
                required: true,
                message: 'Please add your Username!'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  var error = ''

                  if (value.trim().length < 3) {
                    error = 'input must contain more than 3 characters.'
                    return Promise.reject(error)
                  }

                  return Promise.resolve()
                }
              })
            ]}
          >
            <Input
              className=' border-yellow-400 border-2'
              size='large'
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder={'Username'}
            />
          </Form.Item>
          {/************** Input Password **************/}
          <Form.Item
            label={<div className='text-white'>Password</div>}
            name='password'
            rules={[
              {
                required: true,
                message: 'Please add your Password!'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  var error = ''

                  if (value == '') {
                    error = "You didn't enter a password.\n"
                    return Promise.reject(error)
                  } else if (value.length < 8) {
                    error =
                      'The password input should contain more than 8 numbers'
                    return Promise.reject(error)
                  }

                  return Promise.resolve()
                }
              })
            ]}
          >
            <Input
              className=' border-yellow-400 border-2'
              size='large'
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder={'Password'}
            />
          </Form.Item>

          {/************** Submit Form **************/}
          <Form.Item>
            <Button
              htmlType='submit'
              block
              size='large'
              className='btn-login'
              loading={auth?.loadingLogin}
            >
              {'Login'}
            </Button>
          </Form.Item>
        </Form>
      </LoginContainer>
    </RootContainer>
  )
}

export default Login
