class MessageThreadsController < ApplicationController

  def new
    @receiver = User.find_by_username(params.require(:receiver))
  end

  def create
    @receiver = User.find_by_username(params.require(:receiver))
    thread = MessageThread.create(thread_attrs)
    if thread.valid?
      flash[:notice] = "Message has sent successfully to #{@receiver.act_name}"
      redirect_to artist_dashfolio_path(username: @receiver.username)
    else
      flash[:notice] = thread.errors.full_messages.join(', ')
      render 'new'
    end
  end

  def index
    redirect_to message_show_path(slug: current_user.recent_thread.slug)
  end

  def show
    @thread = current_user.message_threads.find_by_slug(params.require(:slug))
  end

  def add_reply
    @thread = MessageThread.find_by_slug(params.require(:slug))
    @message = @thread.messages.create({
      body: params.require(:body),
      sender_id: current_user.id,
      sent_at: Time.current
    })
    unless @message.valid?
      render json: { error: "Failed to send reply" }, status: 424
    end
  end

  def destroy
  end

  private
  def thread_attrs
    {
      subject: params.require(:subject),
      sender_id: current_user.id,
      receiver_id: @receiver.id,
      sent_at: Time.current,
      messages_attributes: [{
        body: params.require(:body),
        sender_id: current_user.id,
        sent_at: Time.current
      }]
    }
  end

end
